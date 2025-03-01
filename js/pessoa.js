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
        calcularImposto() {
            return (30 * this._preco) / 100;
        }
        calcularImposto2() {
            return (30 * this._preco) / 100 + this._preco;
        }
    }
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
