export var PHONE_NUM_REGEX = /^[+][(]{0,1}[1-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
export var MOMO_NUM_REGEX = /^[0][\s/0-9]{9}$/;
export var DECIMAL_NUM_REGEX = /^-?\d*\.{1}\d*$/;
export var DECIMAL_NUM_REGEX_POSITIVE_ONLY = /^\d*\.{1}\d*$/;
export var USER_PLACEHOLDER = 'v1627893621/user_qvwhs7webp';
export var DEBOUNCE_TIMER = 500;
export var LONG_POLL_INTERVAL = 60000;
export var SHORT_POLL_INTERVAL = 5000;
// Global Utils
export var isAuthorised = function (permittedRoles, userRoles) {
    if (permittedRoles.includes('all')) {
        return true;
    }
    return permittedRoles === null || permittedRoles === void 0 ? void 0 : permittedRoles.some(function (r) { return userRoles.includes(r); });
};
