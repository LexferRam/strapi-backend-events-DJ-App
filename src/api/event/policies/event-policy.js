module.exports = (policyContext, config, { strapi }) => {
    if (policyContext.state.user.role.code === config.role) { // if user's role is the same as the one described in configuration
    
    
        console.log(policyContext.state.user)
        console.log(config)
    
        return true;
    }

    return false; // If you return nothing, Strapi considers you didn't want to block the request and will let it pass
  }