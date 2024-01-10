<template>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/">
          <!-- <img class="img-fluid w-25 h-25 items-align-start" src="https://i.postimg.cc/gJGkzzFc/Screenshot-2024-01-08-154314.png" alt="logo" /> -->
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about"> About </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/resume"> Resume </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">
                Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/testimonials">
                Testimonials
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">
                Contact Me
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style scoped>
/* Navbar background color */
.navbar {
  background-color: #5c95cf;
}

/* Navbar container */


/* Navbar logo */
/* .navbar img {
  width: 25%;
  height: 25%;
  object-fit: contain;
} */

/* Navbar toggler button */


/* Navbar links */
.navbar-nav {
  margin-left: auto;
}

.nav-item {
  margin-right: 1rem;
}

.nav-link {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00ffbf;
}

</style>