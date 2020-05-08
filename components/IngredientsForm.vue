<template>
  <div class="content">
    <div class="paper-text">
      <ul>
        <li>
          {{ calculat(ananas.q, quantity) }} tasse ({{
            calculat(ananas.v, quantity)
          }}ml) d'ananas
        </li>
        <li>{{ calculat(pear, quantity) }} poire</li>
        <li>
          {{ calculat(appleJuice.q, quantity) }} cuillerée ({{
            calculat(appleJuice.v, quantity)
          }}
          ml) de jus de pommes
        </li>
        <li>{{ calculat(redGrapes, quantity) }} grappes de raisins rouges</li>
        <li>{{ calculat(strawberries, quantity) }} g de fraises</li>
      </ul>
    </div>
  </div>
</template>

<script>
//Style
import "./../public/css/app.scss"

export default {
  name: "IngredientsForm",
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
  methods: {
    calculat(p, q) {
      return +p * +q
    }
  }
}
</script>
