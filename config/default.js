module.exports = {
  host: 'localhost',
  port: 3000,
  public: 'public',
  authentication: {
    secret: 'SupersecretpassworD',
    strategies: ['jwt','local'],
    path: '/authentication',
    service: 'users',
    jwt: {
      header: {
        type: 'access',
      },
      subject: 'anonymous',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d'
    }
  }
};
