<template>
    <section class="pt-5 ps-3 pe-3 ps-sm-5">
      <form class="d-flex justify-content-center flex-column w-90 gap-4 " @submit.prevent="signup">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Correo Electrónico</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" @input="event => (signupData.email)" v-model="signupData.email">
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password" v-model="signupData.password">
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="Ej: Carrera 1 #23 -4" v-model="signupData.address">
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" v-model="signupData.city">
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" v-model="signupData.notify">
            <label class="form-check-label" for="gridCheck">
              Mantenerme notificado
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-general">Registrarse</button>
      </form>
    </section>
  </template>
<script setup>
  import { ref, reactive } from 'vue';
  import { useFetch } from '@/composables/'
  import Swal from 'sweetalert2'
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const signupData = reactive({
    email: '',
    password: '',
    city: '',
    address: '',
  });

  const baseUrl = import.meta.env.VITE_API_ENDPOINT;

  const signup = async () => {

    if ( signupData.email === '' || signupData.password === '' ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: 'Completa los campos',
            });
        return;
    }
    const username = `${signupData.email?.split('@')[0]}${Date.now()}`
    const { data, error } = await useFetch(`${baseUrl}/signup`, 'post', {'username': username, 'email': signupData.email , 'password': signupData.password })
    ('data',data)
    ('error')

    if ( error && typeof(error) === 'string' ){
        const detailError = JSON.parse(error);
        (detailError)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: detailError.detail,
            });
        return;
    }

    Swal.fire({
            position: "center",
            icon: "success",
            title: "Te has registrado correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    router.push({ name: 'home' });

  };
</script>
<style lang="">
    
</style>