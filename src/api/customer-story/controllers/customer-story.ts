/**
 * customer-story controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::customer-story.customer-story",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const story = await strapi.entityService.findMany(
        "api::customer-story.customer-story",
        query,
      );

      const sanitizedEntity = await this.sanitizeOutput(story, ctx);

      return this.transformResponse(sanitizedEntity[0]);
    },
  }),
);
