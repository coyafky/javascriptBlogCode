import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueAMap from "vue-amap";//引入高德地图

Vue.use(VueAMap)//挂在到Vue实例上

const appKey = "766b671766e53b1486824a5651b1d0f9";//高德地图的key

// 初始化vue-amap

VueAMap.initAMapApiLoader({

    // 高德的key

    key: "自己申请的key值",

    // 插件集合

    plugin: [

        "AMap.Autocomplete",

        "AMap.PlaceSearch",

        "AMap.Scale",

        "AMap.OverView",

        "AMap.ToolBar",

        "AMap.MapType",

        "AMap.PolyEditor",

        "AMap.CircleEditor",

        "AMap.Geolocation",

        "Geocoder",

    ],

    // 高德 sdk 版本，默认为 1.4.4

    v: "1.4.4",

});

//高德的安全密钥

window._AMapSecurityConfig = {

    securityJsCode: "自己申请的安全密钥",

};


const app = createApp(App)
app.mount('#app')
