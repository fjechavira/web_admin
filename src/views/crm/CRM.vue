<template>
  <div>
    <b-tabs pills>
      <b-tab active>
        <template #title>
          <feather-icon
            icon="UserPlusIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Afiliación</span>
        </template>
        <afiliacion />
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon
            icon="FlagIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Leads</span>
        </template>
        <leads-list />
      </b-tab>
      <b-tab>
        <template #title>
          <feather-icon
            icon="UsersIcon"
            size="16"
            class="mr-0 mr-sm-50"
          />
          <span class="d-none d-sm-inline">Contactos</span>
        </template>
        <leads-list />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import {
  BTab,
  BTabs,
} from 'bootstrap-vue'

import LeadsList from './LeadsList.vue'
import Afiliacion from './Afiliacion.vue'

export default {
  components: {
    BTab,
    BTabs,

    LeadsList,
    Afiliacion,
  },
  data() {
    return {
    }
  },
}

</script>

<style>

</style>
