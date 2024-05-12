<template>
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <router-link class="nav-link" to="/"> 
            <img src="/assets/img/logo2.png" alt="Para Sumercé" width="200" height="65">
        </router-link>
    </a>
    <div class="">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div style="gap: 15px" class="offcanvas-header">
        <img v-if="!getUserSessionState" src="/assets/img/logo2.png" alt="Para Sumercé" width="200" height="65">
        <img v-if="getUserSessionState" style="width: 40px; height: 40px;" src="/assets/img/person-circle.svg" alt="">
        <p v-if="getUserSessionState"> Hola, {{getUsername}} </p>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas"  @click="scrollToSection('about')" class="nav-link" href="">Inicio</a>
                <!--<a data-bs-dismiss="offcanvas" @click="closeSideBar('home')" class="nav-link" href="">Inicio</a>-->
            </li>
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas"  @click="scrollToSection('about')" class="nav-link" href="">Nosotros</a>
            </li>
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas"  @click="scrollToSection('services')" class="nav-link" href="#">Servicios</a>
            </li>
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas" @click="scrollToSection('contact')" class="nav-link" href="#">Contacto</a>
            </li>
            <li v-if="!getUserSessionState" class="nav-item">
            <a data-bs-dismiss="offcanvas" @click="closeSideBar('login')" class="nav-link" href="">Iniciar sesión</a>
            </li>
            <li v-if="!getUserSessionState" class="nav-item">
            <a data-bs-dismiss="offcanvas" @click="closeSideBar('signup')" class="nav-link" href="">Registrarse</a>
            </li>
            <li v-if="getUserSessionState" class="nav-item">
            <a data-bs-dismiss="offcanvas" @click="closeSession" class="nav-link" href="">Cerrar sesión</a>
            </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useUserSession } from '@/store/userSession.js'
import { storeToRefs } from 'pinia';
import { changeStateSessionUser, deleteCookie } from '@/composables/'
import Swal from 'sweetalert2'

const store = useUserSession();
const { getUserSessionState, getUsername } = storeToRefs(store);

const router = useRouter();

// Función para desplazarse a una sección específica de la página
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para cerrar la barra lateral
const closeSideBar = (page) => {
    router.push({ name: page });
}

const closeSession = () =>{
  let timerInterval;
  Swal.fire({
    title: "Se está cerrando tu sesión",
    html: "Esto tomará unos segundos",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    }
  });
  changeStateSessionUser(false);
  deleteCookie('usersession');
  deleteCookie('username');
}
</script>
<style lang="">
    
</style>