<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-img
          center
          class="mb-1 mb-sm-0"
          height="50px"
          :src="require('@/assets/images/logo/logo-full.png')"
          alt="Esquimal Logo"
        />

        <b-card-title class="mb-1" />
        <b-card-text class="mb-2" />

        <!-- form -->
        <validation-observer
          ref="loginForm"
          @submit.prevent="login"
        >
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent
          >

            <!-- email -->
            <b-form-group
              label-for="email"
              label="Usuario"
            >
              <validation-provider
                #default="{ errors }"
                name="Usuario"
              >
                <b-form-input
                  id="email"
                  v-model="username"
                  name="login-email"
                  :state="errors.length > 0 ? false:null"
                  placeholder=""
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Contraseña</label>
              </div>
              <validation-provider
                #default="{ errors }"
                name="Password"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false:null"
                    name="login-password"
                    placeholder=""
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
              >
                Recordarme
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="warning"
              type="submit"
              block
            >
              Iniciar Sesión
            </b-button>
          </b-form>
        </validation-observer>
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BImg, BButton, BForm, BFormInput, BFormGroup, BCard, BCardTitle, BCardText, BInputGroup, BInputGroupAppend, BFormCheckbox,
} from 'bootstrap-vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    // BSV
    BImg,
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BCard,
    BCardTitle,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      username: 'dmartinez',
      password: 'hola.putita.123',
      status: '',
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    login() {
      this.$store.dispatch('account/login', {
        username: this.username,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
