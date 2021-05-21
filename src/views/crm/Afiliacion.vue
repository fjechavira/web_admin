<template>
  <div>
    <b-card title="Afiliar 🙌">
      <b-card-text />
    </b-card>
    <b-row>
      <b-col md="4">
        <div class="demo-inline-spacing">
          <b-button
            block
            variant="relief-success"
            size="lg"
            class="m-0"
          >
            Aceptar
          </b-button>
        </div>
      </b-col>
      <b-col md="4">
        <div class="demo-inline-spacing">
          <b-button
            block
            variant="relief-warning"
            size="lg"
            class="m-0"
          >
            Reagendar
          </b-button>
        </div>
      </b-col>
      <b-col md="4">
        <div class="demo-inline-spacing">
          <b-button
            block
            variant="relief-danger"
            size="lg"
            class="m-0"
          >
            Cancelar
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BCardText,
  BButton,
  BCol,
  BRow,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BRow,
    BCol,
  },
}
</script>

<style>

</style>
