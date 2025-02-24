<template>
  <div>
    <p>当前位置经纬度: {{ position }}</p>
    <p>详细地址: {{ address }}</p>
    <p v-if="error">错误信息: {{ error.message }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'; 
import { useGeolocation } from './hook/useGeolocation';
const position = ref(null); 
const address = ref(''); 
const error = ref(null);
const { getCurrentPosition, getAddress } = useGeolocation();
</script>