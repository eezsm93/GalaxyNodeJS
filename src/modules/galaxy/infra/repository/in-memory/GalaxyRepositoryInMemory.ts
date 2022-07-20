import { Galaxy } from "@modules/galaxy/entities/Galaxy"

class GalaxyRepositoryInMemory{
  galaxy: Galaxy[] = []

async create(values: Galaxy): Promise<Galaxy>{

this.galaxy.push(values);
return values;

}


}

export {GalaxyRepositoryInMemory}