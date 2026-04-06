export const environment = {
  production: true,
  apiUrl: '/api',
  azureAd: {
    clientId: 'YOUR_CLIENT_ID',
    authority: 'https://login.microsoftonline.com/YOUR_ENTRA_TENANT_ID',
    redirectUri: 'https://your-production-domain.com',
    scopes: ['api://YOUR_CLIENT_ID/access_as_user', 'User.Read'],
    graphScopes: ['User.Read']
  }
};
