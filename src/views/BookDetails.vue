<template>
    <div v-if='book' class="book-details">
      <img :src="book.images.cover" :alt="book.title" responsive>
      <h1>{{ book.title }}</h1>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Release Date:</strong> {{ book.dateOfRelease }}</p>
      <p class="book-description">{{ book.brief }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        book: null
      }
    },
    mounted() {
      fetch(`https://myvuelibrary-9a059-default-rtdb.europe-west1.firebasedatabase.app/books/${this.id}.json`)
        .then(res => res.json())
        .then(data => this.book = data)
        .catch(err => console.log(err.message))
    }
  }
  </script>
  
  <style>
.book-details {
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 400px;
  margin: 0 auto;
}

.book-description {
  margin-top: 10px;
}
.book-details img {
  max-width: 200px;
  height: auto;
  /* Additional image styles */
  }
  </style>