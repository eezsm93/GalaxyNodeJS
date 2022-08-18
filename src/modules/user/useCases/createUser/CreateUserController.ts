import { UserRepository } from "@modules/user/infra/prisma/UserRepository";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, photoBase64 } = request.body;

    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      photoBase64,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
