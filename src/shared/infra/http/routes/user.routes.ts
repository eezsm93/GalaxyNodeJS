import { AuthenticateUserController } from "@modules/user/useCases/authUser/AuthenticateUserController";
import { CreateUserController } from "@modules/user/useCases/createUser/CreateUserController";
import { Router } from "express";

const userRoutes = Router();

let createUserController = new CreateUserController();
let authenticateUserController = new AuthenticateUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/authenticate", authenticateUserController.handle);

export { userRoutes };
