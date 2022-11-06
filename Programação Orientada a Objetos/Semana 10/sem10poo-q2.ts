class ContaCorrente {
    nome_correntista: string;
    cpf_correntista: string;
    saldo: number;

    constructor() {
        this.nome_correntista = "";
        this.cpf_correntista = "";
        this.saldo = 0;
    }

    setNome(nome: string): void {
        this.nome_correntista = nome;
    }

    setCpf(cpf: string): void {
        this.cpf_correntista = cpf;
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    depositar(valor: number): any {
        return this.saldo + valor;
    }

    sacar(valor: number): any {
        return this.saldo - valor;
    }

    mostrarInformacoes(): any{
        console.log(`Nome = ${this.nome_correntista}, CPF = ${this.cpf_correntista}, Saldo atual = ${this.saldo}`)
    }
}

let conta = new ContaCorrente();
conta.setNome("Jorge");
conta.setCpf("121.323.424-99");
conta.setSaldo(1233);
conta.mostrarInformacoes();
