<template>
    <div>
      <h2>What do you think?</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" placeholder="Type in your email..." v-model="comment.email" required>
        </div>          
        <p v-if="emailError" class="form-error">{{ emailValidationMessage }}</p>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" rows="5" placeholder="Type in your review..." v-model="comment.content" required></textarea>
        </div>
        <div class="form-group">
          <label for="isRead">Read:</label>
          <input type="checkbox" id="isRead" v-model="comment.isRead">
          <!-- WHEN WE USE MULTIPLE CHECKBOXES WITH THE SAME VUE MODEL PROPERTY WE USE AN ARRAY FOR THAT MODEL AND WE DIFFRIENTIATE THEM BY ADDING A VALUE ATTRIBUTE -->
        </div>
        <div class="form-group">
          <label for="rating">Rating:</label>
          <select id="rating" v-model="comment.rating">
            <option value="Not Good">Not Good</option>
            <option value="Good">Good</option>
            <option value="Very Good">Very Good</option>
            <option value="Excellent">Excellent</option>
          </select>
        </div>
        <!-- multiple select (add the skills array to your data)-->
        <!-- <label>Skills (press alt + comma to add):</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span> -->
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const comment = ref({
    email: '',
    content: '',
    isRead: false,
    rating: 'Good',
    bookId: route.params.id
  });
  const emailError = ref(false);
  const emailValidationMessage = ref("Email invalid, needs to include an '@'");

  // addSkill($event) {
  //   if($event.key === ',' && this.tempSkill) {
  //     if (!this.skills.includes(this.tempSkill)) {
  //       this.skills.push(this.tempSkill)
  //     }
  //     this.tempSkill = ''
  //   }
  // },
  // deleteSkill(skill) {
  //   this.skills = this.skills.filter(item => {
  //     return skill !== item
  //   })
  // },
  // sidenote : if you want to increment a variable for example you need to call onCompute() 
  
  function submitComment(e) {
    e.preventDefault();
    
    // email validation
    emailError.value = comment.value.email.includes("@") ? '' : emailValidationMessage.value

    // Here, you can submit the comment to your database or take any action you need.
    // The comment data is available in comment.value.
    if (!emailError.value) {
        // Create a new comment object with the data to be sent
        const data = {
          email: comment.value.email,
          content: comment.value.content,
          isRead: comment.value.isRead,
          rating: comment.value.rating,
          bookId: comment.value.bookId
        };

        // Make a POST request to the API
        fetch('https://myvuelibrary-9a059-default-rtdb.europe-west1.firebasedatabase.app/comments.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the API
          console.log('Comment submitted:', data);

          // You can optionally reset the comment form or perform other actions here
          comment.value = {
            email: '',
            content: '',
            isRead: false,
            rating: 'Good',
            bookId: ''
          };
        })
        .catch(error => {
          // Handle any errors that occur during the request
          console.error('Error submitting comment:', error);
        });
    }
  }
</script>


  