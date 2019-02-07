<template>
  <s-conatiner>
    <s-row></s-row>
    <s-row :gapless="true"></s-row>
    <s-row :oneline="true"></s-row>
  </s-conatiner>
</template>

<script>
import 'spectre.css/dist/spectre.min.css';
import Row from './components/Row.vue';
import Container from './components/Container.vue';

export default {
  components: {
    's-row': Row,
    's-conatiner': Container
  }
};
</script>

<style>

</style>
