"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const createUserInput_1 = require("../input/createUserInput");
const User_1 = require("../entity/User");
const loginInput_1 = require("../input/loginInput");
const jsonwebtoken_1 = require("jsonwebtoken");
const LoginResult_1 = require("../entity/LoginResult");
let UserResolver = class UserResolver {
    async login({ username, password }) {
        return User_1.UserModel.findOne({ "username": username, "password": password }).then((v) => {
            var token = jsonwebtoken_1.sign({
                "userID": v === null || v === void 0 ? void 0 : v._id
            }, "a321");
            return {
                "userID": v === null || v === void 0 ? void 0 : v._id,
                "login": true,
                "token": token
            };
        });
    }
    async createUser({ password, username }) {
        return User_1.UserModel.create({
            password,
            username
        }).then((_) => {
            return true;
        }).catch((_) => {
            return false;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => LoginResult_1.LoginResult),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginInput_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserInput_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map