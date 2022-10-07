
<script>
import NavBar from '../components/nav/NavBar.vue';
import Counter from '../components/Counter.vue';
import NavLinks from "../components/nav/NavLinks.vue";

export default {
  name: "Home",

  components: {NavLinks, NavBar, Counter},

  data () {
    return {
      title: "",
      link: "",
      description: "",
      posts : []
    }
  },

  methods: {
    submitForm () {
      const posts = {
        title: this.title,
        link: this.link,
        description: this.description,
        id: Date.now()
      }
      if (this.title.length > 0 && this.link.length > 0 && this.description.length > 0) {
        this.posts.unshift(posts);
      }else {
        alert("Заполните все поля");
      }

        this.$emit("add-post", posts)

        this.title = ""
        this.link = ""
        this.description = ""

        console.log(posts);
      }
    },
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
            <h4>Form</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="title">Title</label>
                <input
                    type="text"
                    class="form-control" id="title"
                    v-model="title"
                />
              </div>
              <div class="form-group">
                <label for="link">Link</label>
                <input
                    type="text"
                    class="form-control"
                    id="link"
                    v-model="link"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    v-model="description"
                >
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mt-xxl-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Posts</h4>
          </div>
          <div class="card-body">
            <div class="card" v-for="post in posts" :key="post.id">
              <div class="card-body my-2">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.description }}</p>
                <a :href="post.link" target="_blank" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
