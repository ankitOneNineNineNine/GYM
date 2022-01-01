export const authed = (user) => {
    return localStorage.getItem('hash') && user;
}