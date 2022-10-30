<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="https://via.placeholder.com/300x80" alt="">
            </a>

            <a role="button" @click="isOpen = !isOpen" class="navbar-burger burger" :class="{'is-active' : isOpen}" aria-label="menu" aria-expanded="false" data-target="navLinks">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-content">
            <div id="navLinks" class="navbar-menu" :class="{'is-active' : isOpen}">
                <div class="navbar-start"></div>

                <div class="navbar-end">
                    <router-link class="navbar-item" to="/">Home</router-link>
                    <router-link class="navbar-item" to="/about">What we do</router-link>
                    <router-link class="navbar-item" to="/the-digital-divide">The digital divide</router-link>
                    <router-link v-if="$store.state.loggedin" class="navbar-item" to="/profile">Profile</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data () {
    return {
        isOpen: false,
    }
  }
}
</script>