<template>
    <div class="navbar-container">
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                    <img src="../assets/icon.png" alt="icon">
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down nav-list">
                    <li><router-link to="/">Hello</router-link></li>
                    <li><router-link to="/cars">Hello</router-link></li>
                    <li><router-link to="/car">Hello</router-link></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    nav{
        background-color: transparent !important;
    }

    .navbar-container{
        top: 0;
        position: fixed !important;
        width: 100vw !important;
    }

    .nav-wrapper{
        border: 1px solid gray;
        color: black
    }

    .nav-list{
        width: 40vw !important;
    }

    .nav-list li{
        width: 33% !important;
    }

    .brand-logo{
        margin-left: 40px !important;
        padding: 10px !important;;
    }

    .brand-logo img{
        height: 50px !important;
        width: 50px !important;
    }
</style>
