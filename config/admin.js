module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b878fea7d54b7b7a3fb4b76fb94a2092'),
  },
});
