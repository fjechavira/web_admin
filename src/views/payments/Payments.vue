<template>
  <b-card>
    <b-row>
      <b-col md="4">
        <b-form-file
          v-model="file"
          @input="getFile()"
          accept=".xlsx, .xls"
          placeholder="Seleccionar archivo..."
          drop-placeholder="Drop file here..."
        />
        <b-card-text class="my-1">
          Archivo Seleccionado: <strong>{{ file ? file.name : 'No ha seleccionado un archivo' }}</strong>
        </b-card-text>
      </b-col>
    </b-row>
    <table-list />
  </b-card>
</template>

<script>
import {
  BFormFile,
  BCard,
  BCardText,
  BRow,
  BCol,
} from 'bootstrap-vue'
import readXlsxFile from 'read-excel-file'
import TableList from './TableList.vue'

export default {
  components: {
    BFormFile,
    BCard,
    BCardText,
    BRow,
    BCol,
    TableList,
  },
  data() {
    return {
      file: null,
    }
  },
  methods: {
    getFile() {
      if (this.file) {
        console.log(`Nombre de Archivo ${this.file.name}`)
        console.log(`Tamaño del Archivo ${this.file.size}`)
        readXlsxFile(this.file).then(rows => {
          console.log(`Rows: ${rows}`)
        })
      }
    },
  },
}
</script>
