<template>
  <h1>These are my books</h1>
  <div class="card-container">
      <div class="card" v-for="book in books" :key="book.id">
        <img :src="book.image" :alt="book.title">
        <h2>{{ book.title }}</h2>
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
    fetch('https://myvuelibrary-default-rtdb.firebaseio.com/books.json')
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
max-width: 100%;
height: auto;
/* Additional image styles */
}

  </style>
  