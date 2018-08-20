<template>
  <table class="table">
    <tr class="table-heading">
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Accepted Values</th>
      <th>Default</th>
    </tr>
    <div class="table-body">        
      <tr
          v-for="(attr, index) in attributes"
          :key="attr.name"
          :class="{'gray-row': index % 2 !== 0, 'table-row': true}"
        >
          <td>{{attr.name}}</td>
          <td>{{attr.desc}}</td>
          <td>{{attr.type}}</td>
          <td>{{attr.values}}</td>
          <td>{{attr.default}}</td>          
        </tr>
    </div>
  </table>
</template>

<script>
import vueTypes from 'vue-types'
export default {
  name: 'UiTable',
  props: {
    attributes: vueTypes.array.isRequired
  }
}
</script>


<style lang='postcss' scoped>
.table {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 2.5rem 1fr;
}
.table-body {
  width: 100%;
  height: 100%;
}
.table-heading {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-top: 1px solid var(--gray-light);
  border-bottom: 1px solid var(--gray-light);
  & th {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    color: var(--darkPurple);
    font-size: 0.75rem;
    font-weight: bold;
  }
}

.gray-row {
  background-color: var(--light-purple);
}

.table-row {
  width: 100%;
  height: 2.5rem;
  display: flex;
  padding: 0 1rem;
  justify-content: space-evenly;
  box-sizing: border-box;

  & td {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
}
</style>
