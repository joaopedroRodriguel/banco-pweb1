class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, ContaEspecial : Conta) {
        super(nome, cpf, conta);
        this._ContaEspecial = ContaEspecial;
    }
    get ContaEspecial() {
        return this._ContaEspecial;
    }
    set ContaEspecial(ContaEspecial) {
        this._ContaEspecial = ContaEspecial;
    }

    saldoTotal() {
     var valorTotal = this._ContaEspecial.saldo += this.Conta.saldo;
     return valorTotal;
    }
}
