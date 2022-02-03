'use strict';

/**
 * event router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::event.event');



// module.exports = createCoreRouter('api::event.event', ({ strapi }) =>  ({
//     // Method 1: Creating an entirely custom action
//     async exampleAction(ctx) {
//       try {
//         ctx.body = 'ok';
//       } catch (err) {
//         ctx.body = err;
//       }
//     }

// }));

