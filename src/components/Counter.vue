
<script>
import NavLinks from "./nav/NavLinks.vue";
import NavBar from "./nav/NavBar.vue";
export default {
  name: "Counter",
  components: {NavBar, NavLinks},
  data() {
    return {
      count: 0,
    }
  },

  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },

  watch: {
    count(value) {
      if (value === 10) {
        alert('You reached 10')
      }
    }
  }
}
</script>

<template>
  <NavBar>
    <NavLinks />
  </NavBar>
  <div class="container mt-xxl-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Counter</h4>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <button class="btn btn-primary" @click="decrement">-</button>
              <span class="mx-3">{{ count }}</span>
              <button class="btn btn-primary" @click="increment">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
