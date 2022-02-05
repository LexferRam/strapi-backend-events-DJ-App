// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/events/me',
        handler: 'event.me',
        config: {
          policies: [
            // // point to a registered policy
            // 'policy-name',
  
            // // point to a registered policy with some custom configuration
            // { name: 'policy-name', config: {} }, 
  
            // pass a policy implementation directly
            (policyContext, config, { strapi },ctx) => {
                // const user = ctx.state.user;
                // console.log(policyContext.state.route.config.auth)
               console.log(strapi.services.users)
              return true;
            },
          ]
        },
      },
    ],
  };

  //DOCUMENTACION REVISADA DE ROUTES(custom router policy) 
  //https://docs.strapi.io/developer-docs/latest/development/backend-customization/routes.html#policies
  