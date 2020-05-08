<template>
  <ul>
    <li>
      {{ calculat(ananasq, quantity) }} tasse ({{
        calculat(ananasv, quantity)
      }}ml) d'ananas
    </li>
    <li>{{ calculat(pear, quantity) }} poire</li>
    <li>
      {{ calculat(appleJuiceq, quantity) }} cuillerée ({{
        calculat(appleJuicev, quantity)
      }}
      ml) de jus de pommes
    </li>
    <li>{{ calculat(redGrapes, quantity) }} grappes de raisins rouges</li>
    <li>{{ calculat(strawberries, quantity) }} g de fraises</li>
  </ul>
</template>

<script>
//Style
import "./../public/css/app.scss"

export default {
  name: "IngredientsList",
  props: {
    ananasq: Number,
    ananasv: Number,
    pear: Number,
    appleJuiceq: Number,
    appleJuicev: Number,
    redGrapes: Number,
    strawberries: Number,
    quantity: Number
  },

  methods: {
    calculat(p, q) {
      return +p * +q
    }
  }
}
</script>
