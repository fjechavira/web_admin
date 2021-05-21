<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="8"
          />
          <b-col
            cols="12"
            md="4"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Buscar..."
              />
              <b-button
                variant="secondary"
              >
                <span class="text-nowrap">Buscar Lead</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-table
        striped
        hover
        responsive
        :items="items"
        :fields="fields"
        :filter="filter"
        empty-text="No se encontraron usuarios"
        class="m-0 p-0"
      >
        <template #cell(first_name)="row">
          {{ row.item.first_name }}
        </template>

        <template #cell(last_name)="row">
          {{ row.item.last_name }}
        </template>

        <template #cell(email)="row">
          {{ row.item.email }}
        </template>

        <template #cell(status)="row">
          <b-badge
            pill
            variant="light-success"
            class="text-capitalize"
          >
            {{ row.item.status }}
          </b-badge>
        </template>

        <template #cell(lead_source)="row">
          <b-badge
            pill
            variant="light-info"
            class="text-capitalize"
          >
            {{ row.item.lead_source }}
          </b-badge>
        </template>

        <template #cell(create_date)="row">
          {{ row.item.create_date }}
        </template>

        <template #cell(actions)>
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: 'ADS' } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Detalles</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: 'ADS' } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Editar</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Eliminar</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BCol,
  BRow,
  BFormInput,
  BButton,
  BTable,
  BBadge,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCol,
    BRow,
    BFormInput,
    BButton,
    BTable,
    BBadge,
    BDropdown,
    BDropdownItem,
  },
  data() {
    return {
      filter: null,
      fields: [
        {
          key: 'first_name',
          label: 'Nombre',
          sortable: true,
        },
        {
          key: 'last_name',
          label: 'Apellidos',
          sortable: true,
        },
        {
          key: 'email',
          label: 'Email',
          sortable: false,
        },
        {
          key: 'create_date',
          label: 'Fecha de Creación',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'status',
          label: 'Estatus',
          sortable: true,
        },
        {
          key: 'lead_source',
          label: 'Fuente',
          sortable: false,
        },
        {
          key: 'actions',
          label: 'Acciones',
        },
      ],
      items: [
        {
          first_name: 'Diana Guadalupe',
          last_name: 'Pacheco Margaritos',
          email: 'gp1933190@gmail.com',
          create_date: '16/05/2021 11:56 PM',
          status: 'Asignado',
          lead_source: 'Facebook',
        },
        {
          first_name: 'Roberto',
          last_name: 'Rodriguez',
          email: 'foreverenigmaaa@hotmail.com',
          create_date: '16/05/2021 11:54 PM',
          status: 'Asignado',
          lead_source: 'Facebook',
        },
        {
          first_name: 'Citlaly',
          last_name: 'Zúñiga',
          email: 'citlalyzuniga66@gmail.com',
          create_date: '16/05/2021 11:41 PM',
          status: 'Asignado',
          lead_source: 'Facebook',
        },
        {
          first_name: 'Susana',
          last_name: 'Torres',
          email: 'susanabrito386@gmail.com',
          create_date: '16/05/2021 10:42 PM',
          status: 'Asignado',
          lead_source: 'Facebook',
        },
        {
          first_name: 'José',
          last_name: 'Jiménez',
          email: 'dksjose91@gmail.com',
          create_date: '16/05/2021 08:54 PM',
          status: 'Asignado',
          lead_source: 'Facebook',
        },
      ],
    }
  },
}

</script>

<style>

</style>
