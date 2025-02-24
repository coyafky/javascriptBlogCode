<script setup>
import { ref, onMounted } from 'vue';
import { fetchBooks, fetchBook, createBook, updateBook, deleteBook } from './api/crud.js';

const books = ref([]);
const newBook = ref({ title: '', author: '' });

const getBooks = async () => {
  try {
    books.value = await fetchBooks();
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

const addBook = async () => {
  try {
    await createBook(newBook.value);
    await getBooks(); // Refresh the book list
    newBook.value = { title: '', author: '' }; // Reset the form
  } catch (error) {
    console.error('Error adding book:', error);
  }
};

const editBook = async (book) => {
  try {
    const updatedBook = { ...book }; // In a real app, you might open a modal for editing
    await updateBook(book.id, updatedBook);
    await getBooks(); // Refresh the book list
  } catch (error) {
    console.error('Error updating book:', error);
  }
};

const removeBook = async (id) => {
  try {
    await deleteBook(id);
    await getBooks(); // Refresh the book list
  } catch (error) {
    console.error('Error deleting book:', error);
  }
};

onMounted(getBooks);
</script>

<template>
  <div>
    <h1>图书管理系统</h1>
    
    <!-- 添加图书表单 -->
    <form @submit.prevent="addBook">
      <input v-model="newBook.title" placeholder="书名" required>
      <input v-model="newBook.author" placeholder="作者" required>
      <button type="submit">添加图书</button>
    </form>

    <!-- 图书列表 -->
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} by {{ book.author }}
        <button @click="editBook(book)">编辑</button>
        <button @click="removeBook(book.id)">删除</button>
      </li>
    </ul>
  </div>
</template>