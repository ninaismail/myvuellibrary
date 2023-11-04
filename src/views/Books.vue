<template>
    <h1>These are my books</h1>
    <div class="card-container">
        <div v-for="(book, key) in books" :key="key" class="card">
          <img :src="book.images.cover" :alt="book.title" responsive>
          <router-link :to="{ name: 'BookDetails', params : {id: key} }">
            <h2>{{ book.title }}</h2>
          </router-link>
          <p>{{ book.brief }}</p>
          <p><strong>Author:</strong> {{ book.author }}</p>
          <p><strong>Release Date:</strong> {{ book.dateOfRelease }}</p>
        </div>
    </div>
    </template>
    
    <script>
    export default {
      data() {
      return {
        books: [],
      }
      },
      mounted() {
      fetch('https://myvuelibrary-9a059-default-rtdb.europe-west1.firebasedatabase.app/books.json')
        .then(res => res.json())
        .then(data => this.books = data)
        .catch(err => console.log(err.message))
      }
    }
    </script>
    <style scoped>
  .card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  /* Additional styles for card layout */
  }
  
  .card {
  width: calc(50% - 30px); /* Adjust width as needed for 2 cards per row with spacing */
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  /* Additional card styles */
  }
  
  .card img {
  max-width: 200px;
  height: auto;
  /* Additional image styles */
  }
  
    </style>
    