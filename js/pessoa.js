"use strict";
var empresa;
(function (empresa) {
    class Pessoa {
        get produto() {
            return this._produto;
        }
        set produto(produto) {
            this._produto = produto;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        get imposto() {
            return this._imposto;
        }
        set imposto(imposto) {
            this._imposto = imposto;
        }
        calcularImposto() {
            return (this._imposto * this._preco) / 100;
        }
        calcularImposto2() {
            return (this._imposto * this._preco) / 100 + this._preco;
        }
    }
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
