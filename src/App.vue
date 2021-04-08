<template>
  <Title />
  <List />
</template>

<script>
import Title from "./components/Title.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: {
    Title,
    List,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Oswald:wght@200;300&display=swap");
@import "assets/css/keyframe/rainbowBackground.css";
* {
  font-family: "Lato";
}
*:focus {
  outline: none;
}
body {
  background: linear-gradient(
    -45deg,
    #f9eac3,
    #f9eac3,
    #cbbf9f,
    #9f957d,
    #746e5d,
    #4d493e,
    #292722
  );
  background-size: 1800% 1800%;

  -webkit-animation: rainbowBackground 30s ease infinite;
  -z-animation: rainbowBackground 30s ease infinite;
  -o-animation: rainbowBackground 30s ease infinite;
  animation: rainbowBackground 30s ease infinite;
  transition: 3s;
}

#app {
  text-align: center;
}
::-webkit-scrollbar {
  width: 4px;
  border: 1px solid transparent;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
  height: 30px;
}
</style>
