<template>
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <router-link class="nav-link" to="/"> 
            <img src="/assets/img/logo2.png" alt="Para Sumercé" width="200" height="65">
        </router-link>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <img src="/assets/img/logo2.png" alt="Para Sumercé" width="200" height="65">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas" @click="closeSideBar('home')" class="nav-link" href="">Inicio</a>
            </li>
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas" class="nav-link" href="">Nosotros</a>
            </li>
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas" class="nav-link" href="#">Servicios</a>
            </li>
            <li class="nav-item">
                <a data-bs-dismiss="offcanvas" class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item">
            <a data-bs-dismiss="offcanvas" @click="closeSideBar('login')" class="nav-link" href="">Iniciar sesión</a>
            </li>
            <li class="nav-item">
            <a data-bs-dismiss="offcanvas" @click="closeSideBar('signup')" class="nav-link" href="">Registrarse</a>
            </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const closeSideBar = ( page ) =>{
    router.push({name: page})
}
</script>
<style lang="">
    
</style>