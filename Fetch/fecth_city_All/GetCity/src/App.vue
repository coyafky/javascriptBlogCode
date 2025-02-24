<template>
  <div>
    <button @click="fetchCity">获取当前城市</button>
    <div v-if="error">错误: {{ error }}</div>
    <div v-else-if="cityInfo">
      当前城市：{{ cityInfo.province }} {{ cityInfo.city }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useGeolocation } from '@vueuse/core';

const cityInfo = ref(null);
const error = ref(null);

const API_KEY = '5583553cad198563af543b87abeb0ae8';

const { coords, error: geolocationError } = useGeolocation();

const fetchCity = async () => {
  try {
    if (geolocationError.value) {
      throw new Error(geolocationError.value.message);
    }

    if (!coords.value) {
      throw new Error('Geolocation failed');
    }

    const { latitude, longitude } = coords.value;
    const url = `https://restapi.amap.com/v3/geocode/regeo?key=${API_KEY}&location=${longitude},${latitude}&output=json`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    if (data.status === '0') {
      throw new Error(data.info || 'Failed to fetch city info');
    }

    if (data.status === '1' && data.regeocode) {
      cityInfo.value = data.regeocode.addressComponent;
    } else {
      throw new Error('Invalid response data');
    }
  } catch (err) {
    error.value = err.message;
  }
};

watch(coords, fetchCity);

onMounted(() => {
  if (coords.value) {
    fetchCity();
  }
});
</script>