import { inject, injectable } from "tsyringe";
import { Galaxy } from "../../entities/Galaxy";
import { IGalaxyRepository } from "../../repository/IGalaxyRepository";


interface ICreateGalaxyDTO{

name: string;
description: string;
color: string;
size: number;
planets: Array<any>;

}

class CreateGalaxyUseCase{

constructor(@inject("GalaxyRepository") private galaxyRepository: IGalaxyRepository){}

async execute({name, description, color, size, planets}: ICreateGalaxyDTO): Promise<Galaxy>{

const galaxy = new Galaxy({
name,
description,
color,
size,
planets
});

const galaxyPersisted = await this.galaxyRepository.create(galaxy);

return galaxyPersisted;

  }
}

export { CreateGalaxyUseCase }