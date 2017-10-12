<template>
  <div style="position:relative;" v-bind:class="{'open':openSuggestion}">
    <input class="form-control" type="text" :value="inputText"
           @input="updateValue($event.target.value)"
           @keydown.enter='enter'
           @keydown.down='down'
           @keydown.up='up'>
    <ul class="dropdown-menu scrollable-menu" style="width:100%">
      <li v-for="(suggestion, index) in matches"
          v-bind:class="{'active': isActive(index)}"
          @click="suggestionClick(index)">
        <a href="#">{{ suggestion[prop.title] }}
          <small>{{ suggestion[prop.value] }}</small>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'autocomplete',
    data() {
      return {
        open: false,
        current: 0,
        inputText: '',
        suggestions: [],
      };
    },
    props: {
      value: {
        type: String,
        required: true,
      },

      fetch: {
        type: Function,
        required: true,
      },

      prop: {
        type: Object,
        required: true,
      },

    },
    computed: {
      matches() {
        return this.suggestions
          .filter(obj => obj[this.prop.title].indexOf(this.inputText) >= 0);
      },

      openSuggestion() {
        return this.inputText !== '' &&
          this.matches.length !== 0 &&
          this.open === true;
      },

    },
    mounted() {
      this.fetch().then(this.setSuggestions);
    },
    methods: {
      setSuggestions(data) {
        this.suggestions = data;
      },
      updateValue(value) {
        if (this.open === false) {
          this.open = true;
          this.current = 0;
        }
        this.inputText = value;
      },

      enter() {
        this.$emit('input', this.matches[this.current][this.prop.value].toString());
        this.inputText = this.matches[this.current][this.prop.title];
        this.open = false;
      },

      up() {
        if (this.current > 0) {
          this.current -= 1;
        }
      },

      down() {
        if (this.current < this.matches.length - 1) {
          this.current += 1;
        }
      },

      isActive(index) {
        return index === this.current;
      },

      suggestionClick(index) {
        this.$emit('input', this.matches[index][this.prop.value].toString());
        this.inputText = this.matches[index][this.prop.title];
        this.open = false;
      },
    },
  };
</script>

<style lang="scss">
  .scrollable-menu {
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
  }
</style>
