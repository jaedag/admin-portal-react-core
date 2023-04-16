"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DECIMAL_NUM_REGEX_POSITIVE_ONLY = exports.DECIMAL_NUM_REGEX = exports.MOMO_NUM_REGEX = exports.PHONE_NUM_REGEX = void 0;
exports.PHONE_NUM_REGEX = /^[+][(]{0,1}[1-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
exports.MOMO_NUM_REGEX = /^[0][\s/0-9]{9}$/;
exports.DECIMAL_NUM_REGEX = /^-?\d*\.{1}\d*$/;
exports.DECIMAL_NUM_REGEX_POSITIVE_ONLY = /^\d*\.{1}\d*$/;
