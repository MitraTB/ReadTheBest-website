<template>
  <b-col  class="m-3">
    <div style="display:flex; justify-content:center;">
      <b-card header="Sign In" style="font-weight:bold; max-width:30%;">
        <b-card-body>
          <b-form>
            <b-form-group label="Email Address">
              <b-form-input
                type="email"
                id="email"
                v-model="form.email"
                trim>
              </b-form-input>
            </b-form-group>
              <b-form-group label="Password">
                <b-form-input
                  type="password"
                  id="password"
                  v-model="form.password"
                  trim>
                </b-form-input>
              </b-form-group>     
            </b-form>
          </b-card-body>
          <b-button href="#" variant="primary" v-on:click="signIn(form)">Sign In</b-button>
        </b-card>
      </div>
    </b-col>
  </template>
<script>
  export default {
    
    data(){
     return {
       form : {
         password : "",
         email :""
         }
      }
    },
    methods:{
    signIn(userInfo){
      try{
     this.$auth.loginWith('local' , {
       data:userInfo
     });
     console.log('user', userInfo);
     }catch(err){
       console.log(err);
     };
     this.form={
       email:"",
       password:""
     }
     }
     }
  }
</script>