export const OAuthSettings = {
    clientId: 'e242d4d4-8831-4107-a2de-fe03469a13b3',
    authority: 'https://login.microsoftonline.com/common/',
    validateAuthority: true,
    redirectUri: 'http://localhost:4200/dashboard',
    scopes: ['user.read', 'openid', 'profile']
};
const user = { id: OAuthSettings.clientId };
sessionStorage.setItem('user', JSON.stringify(user));
//# sourceMappingURL=outh.js.map