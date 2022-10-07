
<script>
import NavBar from "./components/nav/NavBar.vue";

export default {
  name: "App",
  components: {NavBar},
}

</script>

<template>
  <NavBar />
  <RouterView/>
</template>

