import { ref, onMounted, onUnmounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

export function useGeolocation(){
   
    const position = ref(null); // 用于存储经纬度
    const address = ref(''); // 用于存储详细地址
    const error = ref(''); // 用于存储错误信息


    const getCurrentPosition = async () => {
        try {
            await AMapLoader.load({
                'key': '766b671766e53b1486824a5651b1d0f9',
                'version': '2.0',
                'plugins': ['AMap.Geolocation']
            });

            return new Promise((resolve, reject) => {
                if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition((positionSuccess) => {
                        const {lotitude, latitude} = positionSuccess.coords;
                        position.value = {lotitude, latitude};
                        resolve(position.value);
                    }, (positionError) => {
                        reject(positionError);
                    });
                }else{
                    reject(new Error('Geolocation is not supported by this browser.'));
                }
            })
            
        } catch (error) {
            error.value = error.message;
            console.error('Error fetching geolocation:', error);
        }
    }
    
    const getAddress = async (coords)=>{
        const AMap = window.AMap;
        const geocoder = new AMap.Geocoder()
        return new Promise((resolve, reject) => {
            geocoder.getAddress(coords, (status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    address.value = result.regeocode.formattedAddress;
                    resolve(address.value);
                } else {
                    reject(new Error(result.info));
                }
            });
        })
    } 

    onMounted(async () => {
        try {
            const currentPosition = await getCurrentPosition();
            if (currentPosition) {
                await getAddress(currentPosition);
            }
        } catch (error) {
            console.error('Error fetching geolocation:', error);
        }
    });
    return {position, address, error, getCurrentPosition, getAddress}
}