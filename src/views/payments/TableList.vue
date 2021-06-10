<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <b-table
        striped
        hover
        responsive
        :items="items"
        :fields="fields"
        empty-text="No se ha cargado archivo con informacion !!"
        class="m-0 p-0"
      >
        <template #cell(sopnumbe)="row">
          {{ row.item.sopnumbe }}
        </template>
        
      </b-table>

    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BTable,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BTable,
  },
  data() {
    return {
      fields: [
        {
          key: 'sopnumbe',
          label: 'Pedido',
          sortable: true,
        },
        {
          key: 'total',
          label: 'Total',
          sortable: true,
        },
        {
          key: 'curtrxam',
          label: 'Monto Pendiente',
          sortable: true,
        },
        {
          key: 'custname',
          label: 'Cliente',
          sortable: true,
        },
        {
          key: 'saldo',
          label: 'Saldo Cliente',
          sortable: false,
        },
        {
          key: 'reference',
          label: 'Referencia',
          sortable: false,
        },
        {
          key: 'amount_payment',
          label: 'Monto Pago',
          sortable: true,
        },
        {
          key: 'date_payment',
          label: 'Fecha Pago',
          sortable: true,
        },
        {
          key: 'error',
          label: 'Mensaje',
          sortable: false,
        },
      ],
      items: [
        {
          sopnumbe: '300541298',
          total: '5200',
          curtrxam: 200,
          create_date: '01/06/2021 11:56 PM',
          reference: 'MP300541298',
          amount_payment: '3200',
          saldo: '500',
          custname: 'Juanita Robles',
          date_payment: '08/06/2021',
          error: 'Ya existe un pago !!',
        },
        {
          sopnumbe: '300541299',
          total: '3100',
          curtrxam: 200,
          create_date: '02/06/2021 10:20 AM',
          reference: 'BE300541299',
          amount_payment: '3200',
          saldo: '10',
          custname: 'David Martinez',
          date_payment: '08/06/2021',
          error: 'El cliente esta inactivo !!',
        },
      ],
    }
  },
}
</script>

<style>
</style>
