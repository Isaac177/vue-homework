<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
    <router-link to="/" class="navbar-brand">
      <span class="text-white display-6 mx-4 pe-auto" style="cursor: pointer">FormApp</span>
    </router-link>
    <ul class="navbar-nav mx-4">
      <li class="nav-item" style="cursor: pointer">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item" style="cursor: pointer">
        <router-link to="/counter" class="nav-link">Counter</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavLinks"
}
</script>