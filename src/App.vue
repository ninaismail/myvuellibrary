<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/books">Books</router-link>
    <!-- <a href="/">Home (anchor tag)</a> -->
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
  color: #483C42;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: #E97451;
}
button,a {
  cursor: pointer;
  text-decoration: none;
}
a {
  color: #483C42;
}

button:hover {
  filter: brightness(120%);
}

.form-group {
  margin: 10px 0;
  display:flex;
  align-items: end;
  gap:2px;
}
.form-error {
  margin-left: 100px;
  color:red;
  font-size: 12px;
  text-align: left;
}
label {
  text-align: left;
  font-weight: bold;
  min-width:100px;
}

input[type="text"],
textarea, select{
  width: 100%;
  padding: 8px;
  outline:none;
  border: 1px solid #B87333;
}

button {
  padding: 10px 40px;
  background-color: #B87333;
  color: white;
  border:none;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
</style>
