import { Condidat } from '../models/condidat';
import { Offre } from '../models/offre';


export class Cv {
     id: number;
    name :string;
    last:string;
    email:string;
    phone:string;
    position:string;
    localisation:string;
    availablestart:string;
    condidat :Condidat;
    offre:Offre;
    cvfile : string;
    image:string;
}
