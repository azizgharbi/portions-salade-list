<template>
  <div>
    <Ingredients :quantity="quantity"></Ingredients>
    <div class="portions-quantity">
      <label for="quantity"> Le nombre de portions:</label>
      <select class="select" id="quantity" v-model="quantity">
        <option v-for="(q, index) in total" :value="q" :key="q">{{
          index + 1
        }}</option>
      </select>
    </div>
  </div>
</template>

<script>
//Style
import "./../public/css/app.scss"
//component
import Ingredients from "./Ingredients"

export default {
  name: "App",
  data() {
    return {
      quantity: 1,
      total: 4
    }
  },
  components: { Ingredients }
}
</script>
