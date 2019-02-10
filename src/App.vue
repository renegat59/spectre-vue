<template>
  <s-conatiner>
    <h2>Spectre Elements</h2>
    <h2>Grid</h2>
    <s-row :gapless="true">
      <s-column>12 cols</s-column>
    </s-row>
    <s-row :oneline="true">
      <s-column columns="14">12 cols</s-column>
    </s-row>
    <s-row v-for="rowIndex in [12, 6, 4, 3, 2, 1]" :key="rowIndex">
      <s-column
        :columns="rowIndex"
        v-for="colIndex in 12/rowIndex"
        :key="colIndex"
      >{{ rowIndex }} cols</s-column>
    </s-row>
    <s-row v-for="offset in ['l', 'r', 'x']" :key="offset">
      <s-column columns="6" class="bg-primary" :autoOffset="offset">6 cols</s-column>
    </s-row>
    <s-row>

    </s-row>
<!--
    <s-row>
      <s-column
        :columns="{
        xs: 'auto',
        sm: 'auto',
        md: 'auto',
        lg: 'auto',
        xl: 'auto'
      }"
      >Auto col</s-column>
      <s-column>Second Column</s-column>
    </s-row>

    <s-row>
      <s-column
        :columns="{
        lg: 'auto',
        xs: 4
      }"
      >Auto col</s-column>
      <s-column>Second Column</s-column>
    </s-row>
    <s-row>
      <s-column
        :columns="[4, {xs:2}]"
      >Auto col</s-column>
      <s-column columns="auto">Second Column</s-column>
    </s-row>

    <s-row>
      <s-column
        :columns="['auto', {xs:2}]"
      >Auto XS-2</s-column>
      <s-column columns="6">Col-6</s-column>
    </s-row>

    <s-row>
      <s-column
      >Auto XS-2</s-column>
      <s-column columns="6">Col-6</s-column>
    </s-row> -->

    <h2>Responseive Grid</h2>
  </s-conatiner>
</template>

<script>
import 'spectre.css/dist/spectre.min.css';
import Row from './components/Row.vue';
import Container from './components/Container.vue';
import Column from './components/Column.vue';

export default {
  components: {
    's-row': Row,
    's-conatiner': Container,
    's-column': Column,
  },
};
</script>

<style>
</style>
