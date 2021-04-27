<template>
  <b-card
    class="card-congratulation-medal"
  >
    <h5>Felicidades 🎉 David!</h5>
    <b-card-text class="font-small-3">
      Has alcanzado el nivel oro en en tu meta de leads mensuales.
    </b-card-text>
    <h3 class="mb-75 mt-2 pt-50">
      <b-link class="text-warning">
        Haz ganado un bono de $500.00
      </b-link>
    </h3>
    <b-img
      :src="require('@/assets/images/illustration/badge.svg')"
      class="congratulation-medal"
      alt="Medal Pic"
    />
  </b-card>
</template>

<script>
import {
  BCard, BCardText, BLink, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BCard,
    BCardText,
    BLink,
    BImg,
  },
  directives: {
    Ripple,
  },
  methods: {
    kFormatter,
  },
}
</script>
