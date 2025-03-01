namespace empresa {
  export class Pessoa {
        private _produto: string;
        private _preco: number;

        get produto(): string {
        return this._produto;
        }

        set produto(produto: string) {
        this._produto = produto;
        }

        get preco(): number {
        return this._preco;
        }

        set preco(preco: number) {
        this._preco = preco;
        }

        public calcularImposto(): number {
        return (30 * this._preco) / 100;
        }

        public calcularImposto2(): number {
            return (30 * this._preco) / 100 + this._preco;
        }
    }
}