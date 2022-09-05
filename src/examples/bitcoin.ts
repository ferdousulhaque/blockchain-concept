import { Contract } from '../services/contract';

class Bitcoin {
    blockchain;
    bitcoin = {
        from: "",
        to: "",
        amount: ""
    };

    constructor(blockchain: Contract){
        this.blockchain = blockchain;
    }

    transaction(from: string, to: string, amount: string){
        this.bitcoin = {
            from: from,
            to: to,
            amount: amount
        };

        this.blockchain.appendToChain(this.bitcoin);
    }
}

export {
    Bitcoin
}