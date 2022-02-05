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
  

    
    //CRUD FUNCTIONALITY STRAPI
   // https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/populate.html


    // Create event with linked user
//   async create(ctx) {
//     let entity;
//     if (ctx.is("multipart")) {
//       const { data, files } = parseMultipartData(ctx);
//       data.user = ctx.state.user.id;
//       entity = await strapi.entityService.create(data, { files });
//     } else {
//         // console.log(ctx.request.body.data)
//         // console.log('###########################################################################')
//         // console.log(ctx.state.user)
//       ctx.request.body.user = ctx.state.user.id;
//       console.log(ctx.request.body)
//       entity = await strapi.entityService.create('api::event.event',
//         ctx.request.body
//     );
//       console.log(entity)
//     }
//     // return sanitizeEntity(entity, { model: strapi.models.events });
//     return entity
//   },
//   // Update user usersusers
//   async update(ctx) {
//     const { id } = ctx.params;

//     let entity;

//     const [events] = await strapi.services.events.find({
//       id: ctx.params.id,
//       "user.id": ctx.state.user.id,
//     });

//     if (!events) {
//       return ctx.unauthorized(`You can't update this entry`);
//     }

//     if (ctx.is("multipart")) {
//       const { data, files } = parseMultipartData(ctx);
//       entity = await strapi.services.events.update({ id }, data, {
//         files,
//       });
//     } else {
//       entity = await strapi.services.events.update({ id }, ctx.request.body);
//     }

//     return sanitizeEntity(entity, { model: strapi.models.events });
//   },
//   // Delete a user event
//   async delete(ctx) {
//     const { id } = ctx.params;

//     const [events] = await strapi.services.events.find({
//       id: ctx.params.id,
//       "user.id": ctx.state.user.id,
//     });

//     if (!events) {
//       return ctx.unauthorized(`You can't update this entry`);
//     }

//     const entity = await strapi.services.events.delete({ id });
//     return sanitizeEntity(entity, { model: strapi.models.events });
//   },
}));


  //DOCUMENTACION REVISADA

  //CREA FILTROS y POPULATE
  //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html#findone
  //https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/populate.html#basic-populating

  //CREAR CONTROLLER
  //https://docs.strapi.io/developer-docs/latest/development/backend-customization/controllers.html#implementation
