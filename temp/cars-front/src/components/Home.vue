<template>
    <div class="home">
        <div class="container content">
            <div class="row">
                <h1 class="title">Encuentra tu coche</h1>
                <div class="col s6">
                    <h4>Tienda de carros online</h4>
                    <hr>
                    <p class="flow-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, quidem quod? Architecto
                        atque dolorum earum esse expedita magnam maiores neque nostrum officiis quae.
                    </p>

                    <button class="btn main-button">Agrega un coche</button>
                    <button class="btn main-button">Compra un coche</button>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>dojo flask all righths reserved <b>Medellin CO</b></p>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Home",
        components: {}
    }
</script>

<style scoped>
    .home {
        margin-top: -40px !important;
        top: 0 !important;
        height: 100vh !important;
        background-image: url("../assets/header.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #FAFCEF !important;
    }

    .content {
        margin-top: 100px !important;
    }

    .flow-text {
        font-weight: 100;
    }

    .main-button {
        border: 1px dashed #f44336;
        border-radius: 30px !important;
        background-color: #ef9a9a !important;
        color: black !important;
        transition: all 0.5s ease;
    }

    .main-button:hover {
        background-color: white !important;
        color: #f44336 !important;
    }

    .footer {
        position: fixed;
        bottom: 0 !important;
        width: 100vw !important;
        text-align: center;
        border: 1px solid gray;
    }
</style>
