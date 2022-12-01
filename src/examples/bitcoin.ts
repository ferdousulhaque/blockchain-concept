import { SmartContract } from '../services/contract';

class Bitcoin {
    blockchain;
    bitcoin = {
        sender: "",
        recipient: "",
        amount: ""
    };

    constructor(blockchain: SmartContract){
        this.blockchain = blockchain;
    }

    transaction(sender: string, recipient: string, amount: string){
        this.bitcoin = {
            sender: sender,
            recipient: recipient,
            amount: amount
        };

        this.blockchain.appendToChain(this.bitcoin);
    }
}

export {
    Bitcoin
}