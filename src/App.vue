<template>
  <HeaderBase></HeaderBase>
  <main style="margin-top:80px;">
    <router-view></router-view>
  </main>
</template>
<script setup>
import { onMounted } from 'vue';
import HeaderBase from './components/HeaderBase.vue';
import { getCookie } from '@/composables/';
import { useUserSession } from '@/store/userSession'
import { storeToRefs } from 'pinia';
const store = useUserSession();
const { changeSessionState, changeUsername } = store;

onMounted(() => {
 if ( getCookie('username') && getCookie('usersession') && getCookie('usersession') != '' ){
  changeSessionState(true);
  changeUsername(getCookie('username'))
 }
});

</script>

<style scoped>

</style>
