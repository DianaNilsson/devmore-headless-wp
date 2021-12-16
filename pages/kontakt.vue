<template>
  <main class="text-center">
    <b-breadcrumb :items="items" />
    <h1 class="mb-5" v-if="page">{{ page.title.rendered }}</h1>
    <b-form
      action="/"
      class="form text-left"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="post"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <b-form-group label="Namn" label-for="input-name">
        <b-form-input id="input-name" name="name" placeholder="Namn" required />
      </b-form-group>

      <b-form-group label="E-post" label-for="input-email">
        <b-form-input
          id="input-email"
          name="email"
          placeholder="Exempel@email.com"
          required
        />
      </b-form-group>

      <b-form-group label="Ämne" label-for="input-subject">
        <b-form-input
          id="input-subject"
          name="subject"
          placeholder="Ämne"
          required
        />
      </b-form-group>

      <b-form-group label="Meddelande" label-for="message-textarea">
        <b-form-textarea
          id="message-textarea"
          name="message"
          placeholder="Skriv ditt meddelande här"
          rows="3"
          max-rows="6"
        />
      </b-form-group>

      <b-button class="d-block mt-5 mx-auto" type="submit" variant="info">
        Skicka
      </b-button>
    </b-form>
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
      messageInfo: {
        name: null,
        email: null,
        subject: null,
        message: null,
      },
      slug: this.$route.name,
    };
  },
};
</script>

<style scoped>
.page-content {
  margin: auto;
  max-width: 60rem;
}
.form {
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 2px;
  margin: auto;
  max-width: 30rem;
  padding: 3rem;
  margin-bottom: 5rem;
}
</style>
