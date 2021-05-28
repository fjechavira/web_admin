<template>
  <div>
    <b-row
      v-if="isStarted"
    >
      <b-col md="8">
        <b-card
          header="Datos del lead"
        >
          <h3>
            Nombre: {{ items[lead].first_name }} {{ items[lead].last_name }}
          </h3>
          <h3>
            Email: {{ items[lead].email }}
          </h3>
        </b-card>
        <b-card header="Historico">
          <template>
            <app-timeline>
              <app-timeline-item
                title="Lead Afiliado"
                subtitle="El agento dmartinez afilio al lead exitosamente"
                icon="AwardIcon"
                time="Hace 1 minuto"
                variant="success"
              />

              <app-timeline-item
                title="Afiliacion en progreso"
                subtitle="El agente dmartinez esta en progreso de afiliacion"
                icon="PhoneCallIcon"
                time="Hace 3 minutos"
                variant="info"
              />

              <app-timeline-item
                title="Cliente asignado"
                subtitle="El cliente fue asignado al agente dmartinez"
                icon="CheckIcon"
                time="Hace 21 minutos"
                variant="success"
              />

              <app-timeline-item
                title="Lead Creado"
                subtitle="Se creo el lead desde una campaña de facebook"
                icon="UserIcon"
                time="Hace 36 minutos"
                variant="info"
              />
            </app-timeline>
          </template>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card
          border-variant="primary"
          bg-variant="transparent"
          class="shadow-none"
        >
          <b-card-text>
            <b-row>
              <b-col>
                <div class="display-1 m-0 text-center text-primary">
                  {{ minutos }}
                </div>
              </b-col>
              <b-col md="1">
                <div class="display-2 m-0 text-center text-primary">
                  :
                </div>
              </b-col>
              <b-col>
                <div class="display-1 m-0 text-center text-primary">
                  {{ segundos }}
                </div>
              </b-col>
              <b-col md="1">
                <div class="display-2 m-0 text-center text-primary">
                  :
                </div>
              </b-col>
              <b-col>
                <div class="display-1 m-0 text-center text-primary">
                  {{ ms }}
                </div>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          block
          size="lg"
          variant="relief-danger"
          class="m-0 mb-2"
          @click="cancelButton()"
        >
          Rechazar
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          block
          size="lg"
          variant="relief-success"
          class="m-0"
          @click="confirmButton()"
        >
          Afiliar
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        v-if="!isStarted"
        md="12"
      >
        <div class="demo-inline-spacing">
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            block
            size="lg"
            variant="relief-success"
            class="m-0"
            @click="start()"
          >
            Iniciar afiliación
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

import Ripple from 'vue-ripple-directive'
import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BRow,
    BCol,
    AppTimeline,
    AppTimelineItem,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      minutos: '00',
      segundos: '00',
      ms: '000',
      isStarted: false,
      startTime: null,
      lead: 0,
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
  methods: {
    start() {
      this.isStarted = true
      this.startTime = new Date()
      this.elapsedTime()
    },
    nextLead() {
      this.startTime = new Date()
      this.lead = 1
    },
    elapsedTime() {
      if (this.isStarted) {
        setInterval(() => {
          const actl = new Date() - this.startTime
          const ms = Math.floor(new Date(actl).getMilliseconds() / 10)
          const sec = Math.floor((actl / 1000) % 60)
          const min = Math.floor(actl / 60000)
          this.segundos = sec < 10 ? `0${sec}` : sec
          this.minutos = min < 10 ? `0${min}` : min
          this.ms = ms < 10 ? `0${ms}` : ms
        }, 10)
      }
    },
    cancelButton() {
      this.$swal({
        text: '¿Estas seguro que deseas afiliar a este lead?',
        showCancelButton: true,
        confirmButtonText: 'Siguiente',
        cancelButtonText: 'Cancelar',
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger ml-1',
        },
        buttonsStyling: false,
        input: 'select',
        inputOptions: {
          apples: 'No le intereza',
          bananas: 'Marcar mas tarde',
          oranges: 'Otro',
        },
      }).then(data => {
        if (data.value) {
          this.nextLead()
        }
      })
    },
    confirmButton() {
      this.$swal({
        text: '¿Estas seguro que deseas afiliar a este lead?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger ml-1',
        },
        buttonsStyling: false,
      }).then(data => {
        if (data.value) {
          this.nextLead()
        }
      })
    },
  },
}
</script>

<style>

</style>
