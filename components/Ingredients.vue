<template>
  <div class="content">
    <div class="paper-text">
      <IngredientsList
        :quantity="quantity"
        :ananasq="ananas.q"
        :ananasv="ananas.v"
        :pear="pear"
        :appleJuiceq="appleJuice.q"
        :appleJuicev="appleJuice.v"
        :redGrapes="redGrapes"
        :strawberries="strawberries"
      ></IngredientsList>
    </div>
  </div>
</template>

<script>
//Components
import IngredientsList from "./IngredientsList"

export default {
  name: "Ingredients",
  props: {
    quantity: Number
  },
  data() {
    return {
      ananas: { q: 1.5, v: 120 },
      pear: 1,
      appleJuice: { q: 1, v: 30 },
      redGrapes: 2,
      strawberries: 140
    }
  },
  components: { IngredientsList }
}
</script>
