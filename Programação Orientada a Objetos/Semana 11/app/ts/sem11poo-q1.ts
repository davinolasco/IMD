class MesaDeJantar {
    material: string;
    lugares: number;
    preco: number;

    constructor(material:string, lugares?:number, preco?:number) {
        this.material = material;

        if(lugares != undefined){
            this.lugares = lugares;
        }else{
            this.lugares = 4;
        }

        if(preco != undefined){
            this.preco = preco;
        }else{
            this.preco = 0;
        }
    }

    detalhar(): any{
        console.log(`Material = ${this.material}, Lugares = ${this.lugares}, Preço = ${this.preco}`)
    }
}

let m1: MesaDeJantar; 
m1 = new MesaDeJantar("Metal", 8, 100);
m1.detalhar()

let m2: MesaDeJantar; 
m2 = new MesaDeJantar("Madeira", 6);
m2.detalhar()

let m3: MesaDeJantar; 
m3 = new MesaDeJantar("Vidro");
m3.detalhar()