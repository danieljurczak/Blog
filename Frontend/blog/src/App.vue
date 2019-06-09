<template>
  <div id="app">
    <div id="nav">
      <h1>Daniel Jurczak</h1>
      <router-link to="/">Blog</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  width:750px;
  margin-left: auto;
  margin-right: auto;
}
#nav {
  background-color: #775DE8;
  padding:10px 20px;
}
body {
  margin:5px 0 0 0;
  padding:0;
  color: white;
  font-family: 'PT Sans', sans-serif;
}
#nav a {
  color:white;
  text-decoration: none;
  font-size: 125%;
}
#nav a:hover {
  text-decoration: underline;
}
h1 {
  margin:10px 0 20px 0;
  font-size: 225%;
  }
</style>
