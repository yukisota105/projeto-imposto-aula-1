namespace empresa {
  export class Pessoa {
        private _produto: string;
        private _preco: number;
        private _imposto: number;

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

        get imposto(): number {
            return this._imposto;
        }
    
        set imposto (imposto: number) {
        this. _imposto = imposto;
        }
    


        public calcularImposto(): number {
        return (this. _imposto * this._preco) / 100;
        }

        public calcularImposto2(): number {
            return (this._imposto * this._preco) / 100 + this._preco;
        }
    }
}