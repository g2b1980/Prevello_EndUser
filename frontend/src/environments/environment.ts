export const environment = {
  production: false,
  apiUrl: '/api',
  azureAd: {
    clientId: '9a514d86-f3f3-481e-b99e-b474431ded80',
    authority: 'https://login.microsoftonline.com/012e9a35-8f0c-44e3-bb08-c441053a522b',
    redirectUri: 'http://localhost:4200',
    scopes: ['api://51ccc76e-c02b-4c92-9efe-f6ca250b7aef/access_as_user', 'User.Read'],
    graphScopes: ['User.Read']
  }
};
