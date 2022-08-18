import { Request, Response } from "express";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, photoBase64 } = request.body;
  }
}

export { CreateUserController };
