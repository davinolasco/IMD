class Estudante {
    private _creditos: number;

    constructor(
        public readonly id: number,
        public nome: string
    ) {
        this._creditos = 1;
    }

    public get creditos(): number {
        return this._creditos;
    }

    public set creditos(creditos: number) {

        if (creditos <= 0) {
            this._creditos = 1;
        } else {
            this._creditos = creditos;
        }
    }

    detalhar(): any {
        console.log(`ID = ${this.id}, Nome = ${this.nome}, Créditos = ${this._creditos}`)
    }
}

let e1: Estudante; 
e1 = new Estudante(202299910, "Guimão");
e1.creditos = 40;
e1.detalhar()



let e2: Estudante; 
e2 = new Estudante(202067911, "João da Padaria");
e2.creditos = 30;
e2.detalhar()
