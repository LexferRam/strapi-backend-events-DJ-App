'use strict';
/**
 *  event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::event.event');

module.exports = createCoreController('api::event.event', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async me(ctx) {
     const user = ctx.state.user;

     const entries = await strapi.entityService.findMany('api::event.event', {
        // populate: '*',
        populate: ['user'],
        filters: { user: user },
      });

    //  console.log(entries)

     if(!user){
         return ctx.badRequest(null, [
             {message:[{id:"No authorization header was found"}]}
         ])
     }

    //  const entity = await strapi.service('api::event.event').find({user:user.id})

     if(!entries){
         return ctx.notFound()
     }

    return entries;
   
    },
  


  }));


  //DOCUMENTACION REVISADA

  //CREA FILTROS y POPULATE
  //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html#findone
  //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/populate.html#basic-populating

  //CREAR CONTROLLER
  //https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#implementation
