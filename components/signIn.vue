<template>
  <ValidationObserver ref="form">
    <b-col class="m-3">
      <div>
        <b-card header="Sign In" style="font-weight:bold">
          <b-card-body>
            <b-form>
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
            >Sign In</b-button
          >
        </b-card>
      </div>
    </b-col>
  </ValidationObserver>
</template>
<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate';
export default {
   components:{
     ValidationProvider , ValidationObserver
   } ,
   data(){
     return {
       form : {
         name : "",
         password : "",
         email :""
         }
     }
   }}
   </script>