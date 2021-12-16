<template>
  <div class="app">
    <b-navbar sticky toggleable="lg" type="light" variant="light">
      <b-navbar-brand style="font-size: 1.65rem" to="/">Devmore</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            :key="item.id"
            :to="`/${
              pages.find((el) => el.id === Number(item.object_id)).slug
            }`"
            v-for="item in menuItems"
          >
            {{ item.title }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <Nuxt />
    <footer>
      <p>
        Vaniljgatan 14 <br />
        410 22 Göteborg
      </p>
      <p>
        <b-icon aria-hidden="true" class="mr-2" icon="telephone-fill" />
        0701740633 <br />
        <b-icon aria-hidden="true" class="mr-2" icon="envelope-fill" />
        info@devmore.com
      </p>
      <p>
        <b-icon class="mr-2" icon="instagram" scale="1.1" />
        <b-icon class="mr-2" icon="linkedin" scale="1.1" />
        <b-icon class="mr-2" icon="facebook" scale="1.1" />
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return this.$store.state.menuItems;
    },
    pages() {
      return this.$store.state.pages;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  margin: auto;
  min-height: 100vh;
}

main {
  padding: 3rem;
}

section {
  margin-bottom: 6rem !important;
  margin-top: 3rem !important;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-weight: 400;
}

/* Custom styling of Bootstrap classes  */
.breadcrumb {
  background-color: transparent;
  margin-top: -2rem;
  margin-bottom: 2rem;
}

.badge {
  font-weight: 500;
}

.dot {
  display: none;
}
/* ---------------------------- */

footer {
  align-items: center;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  padding: 2rem;
}

@media (max-width: 576px) {
  footer {
    flex-direction: column;
  }

  footer > p:not(:last-child) {
    margin-bottom: 2rem;
  }
}
</style>
