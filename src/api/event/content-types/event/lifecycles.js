//se debe instalar slugify
//revisar la siguiente documentacion
//https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#declarative-and-programmatic-usages

const slugify = require('slugify');

module.exports = {


async beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    if (data.name) {
        data.slug = slugify(data.name, {lower: true});
      }
  },

  async afterCreate(event) {
    const { data, where, select, populate } = event.params;
    if (data.name) {
        data.slug = slugify(data.name, {lower: true});
      };
  },
};
