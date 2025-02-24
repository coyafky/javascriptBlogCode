const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const AMAP_KEY = '766b671766e53b1486824a5651b1d0f9'; // 替换为你的高德地图 API Key
app.get('/api/geocode', async (req, res) => {
    const { lng, lat } = req.query;
    
    console.log(`Received request for coordinates: ${lng}, ${lat}`);
  
    if (!lng || !lat) {
      console.log('Missing longitude or latitude');
      return res.status(400).json({ error: '经度和纬度是必需的' });
    }
  
    const formattedLocation = `${parseFloat(lng).toFixed(6)},${parseFloat(lat).toFixed(6)}`;
  
    try {
      console.log('Sending request to AMap API...');
      const response = await axios.get(`https://restapi.amap.com/v3/geocode/regeo`, {
        params: {
          key: AMAP_KEY,
          location: formattedLocation,
          output: 'json'
        }
      });
  
      console.log('Received response from AMap API:', response.data);
  
      if (response.data.status === '1' && response.data.regeocode) {
        const addressComponent = response.data.regeocode.addressComponent;
        let location = addressComponent.city;
        
        // 如果 city 为空数组，使用 province
        if (Array.isArray(location) && location.length === 0) {
          location = addressComponent.province;
        }
        
        // 如果 location 仍然是数组或为空，使用 district
        if (Array.isArray(location) || !location) {
          location = addressComponent.district;
        }
  
        console.log(`Location found: ${location}`);
        
        if (location) {
          res.json({ city: location });
        } else {
          res.status(404).json({ error: '无法获取位置信息' });
        }
      } else {
        console.log('Unable to get location information from AMap response');
        res.status(404).json({ error: '无法获取位置信息' });
      }
    } catch (error) {
      console.error('Error fetching data from AMap:', error);
      res.status(500).json({ error: '服务器错误' });
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));