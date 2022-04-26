<script lang="js" >
import { Form, Field, ErrorMessage, useField  } from "vee-validate";
import * as Yup from "yup";
import Auth from "../../stores/Main";
import {useStore} from 'vuex'
import {ref} from "vue";

export default {
  name: 'LoginForm',
   components: {
    Field,
    Form,
    ErrorMessage
  },
  
    data() {    
      
      return {
        passwordRules: Yup.string().required().min(4),
        emailRules: Yup.string().required().email(),
      };
    },  

    setup() {
      
      const store = useStore()
      const onSubmit = () => preventDefault() 
      const handleChangeEmail = (e) => {
        store.commit('setEmail', e.target.value);
      }
      const handleChangePassword = (e) => {
        store.commit('setPassword', e.target.value)
      }
      const send = () => {  
          store.dispatch('fetchData', {email, password})
          localStorage.setItem('isLogged', true)
      }

    return {
      send,
      handleChangeEmail,
      handleChangePassword,
      onSubmit, 
    }
  },


   

};

</script>


<template>
  <Form @submit="onSubmit" class="form-login">  
    <h1 class="title-form">LOG IN</h1>
    <div class="mb-3">
      <Field id="email" name="email" type="text" class="input" :rules="emailRules" @change="handleChangeEmail" v-slot="handleChangeEmail"/>
      <ErrorMessage name="email"  class="error"/>
    </div>

    <div class="mb-3">
      <Field id="password" name="password" type="password" class="input" :rules="passwordRules" @change="handleChangePassword" v-slot="handleChangePassword"/>
      <ErrorMessage name="password" class="error"/>
    </div>

    <button 
      class="btn" type="submit" 
     
      @click="send({email,password})">Submit</button>

    <p class="forgot">Forgot your password?</p>

    <p class="account">Don't have an account?</p>
  </Form>
</template>


<style>

.error {
  color: red;
  text-align: left;
}

.form-login {
  padding-top: 5%;
  width: 400px;
  height: 600px;
  margin: 45px auto !important;
  background: rgba(255, 255, 255, 0.5);

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  box-shadow: rgba(20, 20, 48, 0.3) -5px 5px, rgba(20, 20, 48, 0.3) -10px 10px,
    rgba(20, 20, 48, 0.2) -15px 15px, rgba(20, 20, 48, 0.1) -20px 20px,
    rgba(20, 20, 48, 0.05) -25px 25px;
}

.mb-3 {
  width: 80%;
  margin: auto;
}

.title-form {
  text-align: center;
  padding-bottom: 20%;
}

.form-container {
  margin: 120px auto 0 auto;
}

.btn-form {
  display: flex;
  margin: auto;
}

.input {
  width: 250px;
  border: none;
  outline: none;
  display: flex;
  height: 50px;
  border-radius: 3px;
  margin: 15px auto;
}

.email-label {
  width: fit-content;
  display: flex;
  margin: 15px auto;
}

.password {
  width: 250px;
  border: none;
  outline: none;
  display: flex;
  height: 50px;
  border-radius: 3px;
  margin: 15px auto;
}

.password-label {
  width: fit-content;
  display: flex;
  margin: 15px auto;
}

.text-danger {
  margin: auto;
  display: flex;
  width: fit-content;
  -webkit-text-stroke: none;
}

.forgot {
  text-align: center;
  color: black;
  width: 125px;
  font-size: 16px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  cursor: pointer;
  letter-spacing: 1px;
}

.forgot:hover {
  text-decoration: underline;
}

.account {
  text-align: center;
  color: black;
  width: 125px;
  font-size: 16px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  cursor: pointer;
  letter-spacing: 1px;
}

.account:hover {
  text-decoration: underline;
}

.btn {
  margin: 0 auto 0 auto;
  position: relative;
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #525364 !important;
  font-size: 20px;
  font-weight: 500;
  color: white !important;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px 40px;
  box-shadow: 0 6px #130f40;
  transition: all 0.1s;
  font-family: 'Bangers', cursive;
}
.btn:hover {
  transform: translateY(3px);
  box-shadow: 0 4px #130f40;
  background-color: #0d6efd !important;
}
.btn:active {
  transform: translateY(6px);
  box-shadow: none;
}
.btn:active::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}
.btn-after {
  background-color: #30336b;
}
.btn-after::after {
  background-color: #30336b;
}
.btn::after {
  content: "";
  position: absolute;
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}
.btn-animated {
  animation: animateButton 0.5s ease-out 0.15s;
  animation-fill-mode: backwards;
}

@media screen and (max-width: 500px) {
  .btn {
    margin-top: 60px;
    padding: 15px 25px !important;
  }

  .form-login {
    width: 300px;
  }
}
</style>