import { IUserRepository } from "@modules/user/repository/IUserRepository";
import { AppError } from "@shared/errors/AppError";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userEmail: string, userPassword: string) {
    console.log("passei do 1");

    const data = await this.userRepository.listUsersWithFilters({
      email: userEmail,
    });

    console.log("passei do 2");

    const isPasswordCorrect = bcrypt.compareSync(
      userPassword,
      data?.users[0]?.password || ""
    );

    if (data?.users.length === 0 || !isPasswordCorrect) {
      throw new AppError("Login ou senha incorretos");
    }

    const { id, name, email, photoBase64 } = data?.users[0];

    const token = jsonwebtoken.sign(
      { id, name, email, photoBase64 },
      "gx2@7242",
      {
        expiresIn: process.env.PASSWORD_EXPIRES_IN || "24h",
      }
    );

    return {
      token,
      id,
      name,
      email,
      photoBase64,
    };
  }
}

export { AuthenticateUserUseCase };
