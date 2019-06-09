<template>
  <div class="about">
    <h2>O mnie</h2>
    <p>
      Nazywam się Daniel i jestem programistą. Głównie zajmuję się Pythonem i Django.
    </p>
    <h2>
      Kontakt
    </h2>
    <p>
      Email: <a href="mailto:danieljur4@gmail.com">danieljur4@gmail.com</a>
    </p>
    <p>
      Linkedin: <a href="https://www.linkedin.com/in/daniel-jurczak/">daniel-jurczak</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>
<style scoped>
.about {
  color: black;

}
h2 {
  color: #775DE8;
}
a{
  text-decoration: none;
}
a:visited {
  color: #00e;
}
</style>
