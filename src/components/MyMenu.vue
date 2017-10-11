<template>
  <ul>
    <li class="nav-item" v-for="route in routes">
      <router-link :to="route" class="nav-link" active-class="active">
        {{ route.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'my-menu',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    computed: {
      routes() {
        return this.$router.options.routes
          .filter(value => value.title);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
