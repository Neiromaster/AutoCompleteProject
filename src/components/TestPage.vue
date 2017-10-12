<template>
  <div>
    <div class="hello">
      <my-menu></my-menu>
    </div>
    <p>{{ autocomp }}</p>
    <autocomplete v-model="autocomp"
                  :fetch="fetchData"
                  :prop="{title: 'full_name', value: 'id'}"></autocomplete>
  </div>
</template>

<script>
  import MyMenu from './MyMenu';
  import Autocomplete from './Autocomplete';

  export default {
    name: 'Main',
    components: {
      MyMenu,
      Autocomplete,
    },
    data() {
      return {
        autocomp: '',
      };
    },
    methods: {
      fetchData() {
        return fetch('/static/json/testdata.json')
          .then(value => value.json().then(data => data.contractors));
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
