export class Resoconto {
    id: number;
    categoria: string;
    descrizione: string;
    entrata: number;
    uscita: number;
    data: Date;

    constructor(){
        this.id = 0;
        this.categoria = "";
        this.descrizione = "";
        this.entrata = 0;
        this.uscita = 0;
        this.data = new Date();
    }
}