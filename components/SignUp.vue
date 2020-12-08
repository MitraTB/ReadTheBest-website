<template>
  <ValidationObserver ref="form">
    <b-col class="m-3">
      <div>
        <b-card header="Sign Up For ReadTheBest">
          <b-card-body>
            <b-form
              @submit.prevent="addProduct"
            >
              <ValidationProvider name="name" rules="required|alpha" v-slot="{errors}">
                <b-form-group label="Name">
                  <b-form-input
                    type="text"
                    id="name"
                    v-model="form.name"
                    trim
                  ></b-form-input>
                  <div class="error-message">
                    {{ errors[0] }}
                  </div>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider name="email" rules="email" v-slot="{errors}">
                <b-form-group label="Email Address">
                  <b-form-input
                    type="email"
                    id="email"
                    v-model="form.email"
                    trim
                  ></b-form-input>
                  <div class="error-message">
                    {{ errors[0] }}
                  </div>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider
                name="password"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-group label="Password">
                  <b-form-input
                    type="password"
                    id="password"
                    v-model="form.password"
                    trim
                  ></b-form-input>
                  <div class="error-message">
                    {{ errors[0] }}
                  </div>
                </b-form-group>
              </ValidationProvider>

              
            </b-form>
          </b-card-body>
          <b-button href="#" variant="primary" 
            >Sign Up</b-button
          >
        </b-card>
      </div>
    </b-col>
  </ValidationObserver>
</template>
<script>
export default {
    
}
</script>