import { Galaxy } from "../entities/Galaxy";

interface IGalaxyRepository {
  create(galaxy: Galaxy): Promise<Galaxy>;
  listAll(): Promise<{ Galaxys: Galaxy[] }>;
  findById(galaxy_id: string):Promise<Galaxy>;
}

export { IGalaxyRepository };
