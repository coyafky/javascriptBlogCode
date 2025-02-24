<template>
    <div>
      <h1>PDF 文件上传</h1>
      <input type="file" @change="handleFileChange" accept=".pdf" />
      <button @click="uploadFile" :disabled="!selectedFile">上传</button>
      <p v-if="uploadStatus">{{ uploadStatus }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedFile = ref(null);
  const uploadStatus = ref('');
  
  const handleFileChange = (event) => {
    selectedFile.value = event.target.files[0];
  };
  
  const uploadFile = async () => {
    if (!selectedFile.value) {
      uploadStatus.value = '请选择一个 PDF 文件';
      return;
    }
  
    const formData = new FormData();
    formData.append('pdf', selectedFile.value);
  
    try {
      uploadStatus.value = '上传中...';
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        uploadStatus.value = `文件上传成功: ${result.filename}`;
      } else {
        uploadStatus.value = '文件上传失败';
      }
    } catch (error) {
      console.error('上传错误:', error);
      uploadStatus.value = '上传过程中发生错误';
    }
  };
  </script>