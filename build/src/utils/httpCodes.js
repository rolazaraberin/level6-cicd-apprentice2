"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpCodes = {
    success: {
        created: 201,
        general: 200,
        ok: 200,
    },
    error: {
        badRequest: 400,
        conflict: 409,
        forbiddenUser: 403,
        general: 400,
        unauthorized: 401,
        unauthenticated: 401,
        incorrectPassword: 401,
        incorrectCredentials: 401,
        serverError: 500,
    },
    redirect: {
        general: 300,
    },
};
exports.default = httpCodes;
