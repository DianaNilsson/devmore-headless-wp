<template>
  <main class="text-center">
    <b-breadcrumb :items="items" />
    <h1 class="mb-5" v-if="page">{{ page.title.rendered }}</h1>
    <div class="page-content" v-html="page.content.rendered" v-if="page" />
  </main>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.pages.find((el) => el.slug === this.slug);
    },
  },
  data() {
    return {
      items: [
        {
          text: "Hem",
          to: "/",
        },
        {
          active: true,
          text: "Om oss",
        },
      ],
      slug: this.$route.name,
    };
  },
};
</script>

<style>
.page-content {
  margin: auto;
  max-width: 60rem;
}

figure.wp-block-post-featured-image,
blockquote.wp-block-quote,
.about-text {
  margin-bottom: 5rem;
}

.values-text {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
}

.blocks-gallery-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;
}

.blocks-gallery-grid li {
  margin: 1.5rem;
}
.blocks-gallery-grid img {
  margin-bottom: 1rem;
  max-width: 12rem;
  max-height: 12rem;
  border-radius: 50%;
  box-shadow: 0.5px 0.5px 5px #6c757d;
}

.blocks-gallery-grid .team-member {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
}
.blocks-gallery-grid .work-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  color: #ff9900;
}

.wp-image-114 {
  max-width: 20rem;
  max-height: 20rem;
  border: 2px solid #17a2b8;
  border-radius: 50%;
  box-shadow: 0.5px 0.5px 5px #6c757d;
  margin-bottom: 5rem;
}
</style>
