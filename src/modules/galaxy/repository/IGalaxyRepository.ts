import { Galaxy } from "../entities/Galaxy";

interface IGalaxyRepository {
  create(galaxy: Galaxy): Promise<Galaxy>;
}

export { IGalaxyRepository };
