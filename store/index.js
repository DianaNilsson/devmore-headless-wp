export const state = () => ({
  media: [],
  menuItems: [],
  pages: [],
  posts: [],
  tags: [],
});

export const mutations = {
  updateMedia: (state, media) => {
    state.media = media;
  },
  updateMenuItems: (state, menuItems) => {
    state.menuItems = menuItems.map(({ id, menu_order, object_id, title }) => ({
      id,
      menu_order,
      object_id,
      title,
    }));
  },
  updatePages: (state, pages) => {
    state.pages = pages
      .filter((el) => el.status === "publish")
      .map(({ id, slug, title, date, tags, content }) => ({
        id,
        slug,
        title,
        date,
        tags,
        content,
      }));
  },
  updatePosts: (state, posts) => {
    state.posts = posts
      .filter((el) => el.status === "publish")
      .map(
        ({
          id,
          featured_media,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
        }) => ({
          id,
          featured_media,
          slug,
          title,
          excerpt,
          date,
          tags,
          content,
        })
      );
  },
  updateTags: (state, tags) => {
    state.tags = tags.map(({ id, name }) => ({
      id,
      name,
    }));
  },
};

export const actions = {
  //Dispatch on nuxt generate
  async nuxtServerInit({ commit, state }) {
    if (state.posts.length) return;
    try {
      const [media, menuItems, pages, posts, tags] = await Promise.all([
        this.$axios.$get(
          "http://localhost/devmore/wp-json/wp/v2/media?per_page=100"
        ),
        this.$axios.$get("http://localhost/devmore/wp-json/wp/v2/main_menu"),
        this.$axios.$get("http://localhost/devmore/wp-json/wp/v2/pages"),
        this.$axios.$get("http://localhost/devmore/wp-json/wp/v2/posts"),
        this.$axios.$get("http://localhost/devmore/wp-json/wp/v2/tags"),
      ]);

      commit("updateMedia", media);
      commit("updateMenuItems", menuItems);
      commit("updatePages", pages);
      commit("updatePosts", posts);
      commit("updateTags", tags);
    } catch (err) {
      console.log(err);
    }
  },
};
