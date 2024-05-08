<template>
    <section class="pt-5 ps-3 pe-3 ps-sm-5">
        <form class="d-flex justify-content-center flex-column w-90 gap-4 ">
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Correo Electrónico</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Contraseña</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Ej: Carrera 1 #23 -4">
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity">
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
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

</script>
<style lang="">
    
</style>