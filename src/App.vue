<template>
  <s-conatiner>
    <h2>Spectre Elements</h2>
    <h2>Grid</h2>
    <s-row :gapless="true">
      <s-column>12 cols</s-column>
    </s-row>
    <s-row :oneline="true">
      <s-column col="12">12 cols</s-column>
    </s-row>
    <s-row v-for="rowIndex in [12, 6, 4, 3, 2, 1]" :key="rowIndex">
      <s-column
        :col="rowIndex"
        v-for="colIndex in 12/rowIndex"
        :key="colIndex
      "
      >{{ rowIndex }} cols</s-column>
    </s-row>
    <s-row v-for="offset in ['l', 'r', 'x']" :key="offset">
      <s-column col="6" class="bg-primary" :autoOffset="offset">6 cols</s-column>
    </s-row>

    <!-- I have to put the grid examples here -->
    <h2>Hiding/Showing elements</h2>
    <s-row>
      <s-column col="3" v-show-on.xs>Col 1 Show only on XS</s-column>
      <s-column col="3" v-show-on.sm>Col 2 Show on SM and XS</s-column>
      <s-column col="3" v-show-on.md>Col 3 Show on XS, SM, MD</s-column>
      <s-column col="3" v-show-on.lg.md.sm>Col 4 Show on XS, SM, MD and LG</s-column>
    </s-row>

    <h2>Responseive Grid</h2>
    <s-row>
      <s-column>
        <s-hero class="bg-dark">
          <h1>Title</h1>
          <p>Some paragraph in Hero</p>
        </s-hero>
      </s-column>
    </s-row>

    <s-navbar tag="section">
      <s-navbar-section>
        <a href="#" class="btn btn-link">Docs</a>
        <a href="#" class="btn btn-link">Examples</a>
      </s-navbar-section>
      <s-navbar-section center>LOGO</s-navbar-section>
      <s-navbar-section>
        <a href="#" class="btn btn-link">Twitter</a>
        <a href="#" class="btn btn-link">GitHub</a>
      </s-navbar-section>
    </s-navbar>

    <div v-color:bg="color">
      Hello world
      <button @click="color='error'">Change to error</button>
    </div>

    <s-row>
      <s-column>
        <button class="btn ml-1">Submit</button>
        <a class="btn ml-1" href="#">Hello</a>
        <a href="https://www.paypal.me/picturepan2" class="btn ml-1" target="_blank">Hello</a>
        <input type="submit" value="Submit" class="btn ml-1">
        <input type="button" value="Submit" class="btn ml-1">
      </s-column>
    </s-row>

    <s-row>
      <s-column>
        <s-button class="ml-1">Submit button</s-button>
        <s-button tag="a" class="ml-1" href="/">Link button</s-button>
        <s-button tag="input" class="ml-1">Input type</s-button>
      </s-column>
    </s-row>
    <s-row>
      <s-column>
        <s-button success>Success button</s-button>
        <s-button error>Error button</s-button>
        <s-button primary :error="err" @click="onClick">Error button</s-button>
      </s-column>
    </s-row>
  </s-conatiner>
</template>

<script>
import 'spectre.css/dist/spectre.min.css';
import Row from './components/Row.vue';
import Container from './components/Container.vue';
import Column from './components/Column.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import NavbarSection from './components/NavbarSection.vue';
import Button from './components/Button.vue';

export default {
  data() {
    return {
      color: 'warning',
      err: false,
    };
  },
  methods: {
    setError() {
      console.log(this.err);
      this.err = true;
    },
    onClick() {
      console.log('Click fired');
    },
  },
  components: {
    's-row': Row,
    's-conatiner': Container,
    's-column': Column,
    's-hero': Hero,
    's-navbar': Navbar,
    's-navbar-section': NavbarSection,
    's-button': Button,
  },
};
</script>

<style>
</style>
