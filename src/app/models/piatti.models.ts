export class Piatti {
    primi : Primo[]
    secondi : Secondo[]
}

export class Primo{
    id : number;
    nome : string;
    prezzo : number; 

}

export class Secondo{
    id : number;
    nome : string;
    contorno : string; 
    prezzo : number; 
    
}