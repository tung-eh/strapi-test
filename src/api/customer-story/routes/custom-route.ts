export default {
  routes: [
    {
      method: "GET",
      path: "/customer-stories/:slug",
      handler: "customer-story.findOne",
    },
  ],
};
