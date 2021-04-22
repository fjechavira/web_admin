<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col xl="4" md="6">
        <dashboard-medal :data="data.congratulations" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BCol, BRow } from "bootstrap-vue";
import DashboardMedal from "./DashboardMedal.vue";

export default {
  components: {
    BCol,
    BRow,
    DashboardMedal,
  },
  data() {
    return {
      data: {},
    };
  },
  created() {},
};
</script>

<style></style>
