import { UserRepository } from "@modules/user/infra/prisma/UserRepository";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);

    const token = await authenticateUserUseCase.execute(email, password);

    return response.status(200).json(token);
  }
}

export { AuthenticateUserController };
