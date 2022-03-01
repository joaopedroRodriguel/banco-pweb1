class ClienteEspecial extends Cliente {

    private _ContaEspecial : Conta
    private _saldo: number;

    constructor(nome:string, cpf:string, conta:Conta) {
        super(nome, cpf, conta);
    }

    get ContaEspecial() {
        return this._ContaEspecial;
    }
    set ContaEspecial(ContaEspecial) {
        this._ContaEspecial = ContaEspecial;
    }


    saldoTotal() {
        // @ts-ignore
        var valorTotal = this._ContaEspecial.saldo += this.Conta.saldo;
        return valorTotal;
    }


}