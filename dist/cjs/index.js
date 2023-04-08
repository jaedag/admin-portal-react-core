"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHORT_POLL_INTERVAL = exports.LONG_POLL_INTERVAL = exports.DEBOUNCE_TIMER = exports.USER_PLACEHOLDER = exports.DECIMAL_NUM_REGEX_POSITIVE_ONLY = exports.DECIMAL_NUM_REGEX = exports.MOMO_NUM_REGEX = exports.PHONE_NUM_REGEX = void 0;
exports.PHONE_NUM_REGEX = /^[+][(]{0,1}[1-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
exports.MOMO_NUM_REGEX = /^[0][\s/0-9]{9}$/;
exports.DECIMAL_NUM_REGEX = /^-?\d*\.{1}\d*$/;
exports.DECIMAL_NUM_REGEX_POSITIVE_ONLY = /^\d*\.{1}\d*$/;
exports.USER_PLACEHOLDER = 'v1627893621/user_qvwhs7webp';
exports.DEBOUNCE_TIMER = 500;
exports.LONG_POLL_INTERVAL = 60000;
exports.SHORT_POLL_INTERVAL = 5000;
