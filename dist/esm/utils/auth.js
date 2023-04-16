export var isAuthorised = function (permittedRoles, userRoles) {
    if (permittedRoles.includes('all')) {
        return true;
    }
    return permittedRoles === null || permittedRoles === void 0 ? void 0 : permittedRoles.some(function (r) { return userRoles.includes(r); });
};
