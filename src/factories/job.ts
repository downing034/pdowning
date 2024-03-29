import { Job as JobType } from 'constants/types';
import { Factory, IFactory } from 'rosie';
import { Chance } from 'chance';
const chance = new Chance();

let experience1 = chance.sentence({ words: 4 })
let experience2 = chance.sentence({ words: 4 })
let experience3 = chance.sentence({ words: 4 })

export const Job: IFactory<JobType> = new Factory()
  .attrs({
    title: 'Bartender',
    companyName: "Paddy's Pub",
    experienceList: [experience1, experience2, experience3]
  });
