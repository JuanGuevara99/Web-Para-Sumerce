<template>
    <section>
      <div class="container mt-5 pt-5">
        <div class="row">
          <div class="col-12 col-sm-7 col-md-7 m-auto">
            <div class="card border-0 shadow">
              <div class="card-body">
                <div class="d-flex">
                  <svg class="mx-auto my-3 bi bi-person-circle" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </div>
                <form action="">
                  <input type="text" name="" id="" class="form-control my-4 py-2" placeholder="Username" />
                  <input type="text" name="" id="" class="form-control my-4 py-2" placeholder="Password" />
                  <div class="text-center mt-3">
                    <button class="btn btn-primary">Login</button>
                    <router-link class="nav-link mt-4"  to="/signup"> No tienes cuenta? </router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</template>
<script setup>
  import { reactive } from 'vue';

  const loginData = reactive({
    email: '',
    password: ''
  });

  const signupData = reactive({
    name: '',
    email: '',
    password: ''
  });

  const login = () => {
    // Perform login logic here
    console.log('Login with:', loginData.email, loginData.password);
  };

  const signup = () => {
    // Perform signup logic here
    console.log('Sign Up with:', signupData.name, signupData.email, signupData.password);
  };
</script>
<style lang="">
    
</style>