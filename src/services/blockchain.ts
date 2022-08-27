import { SHA256 } from "crypto-js";
import { Block } from "../block";
import { Contract } from "./contract";
import moment from 'moment';


class Blockchain implements Contract {
    blockchain: Block[] = [];

    constructor() {
        // Create our genesis kickoff block
        this.blockchain = [new Block(0, new Date, JSON.stringify({"name": "Ferdous"}), "")];
    }

    generateHash(previousBlock: string): any{
        return "";
    }

    previousBlock(): Block{
        return this.blockchain[this.blockchain.length - 1];
    }

    generateBlock(data: any): Block{
        return new Block(0, new Date(), JSON.stringify(data), "");
    }

    proofOfWork(){
        // Iterate over the chain, we need to set i to 1 because there are nothing before the genesis block, so we start at the second block.
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const prevBlock = this.blockchain[i - 1];

            // Check validation
            if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.previousHash) {
                return false;
            }
        }

        return true;
    }

    appendToChain(newTransaction: any) {
        let previousBlockHash = this.previousBlock().getHash();
        let newBlock = new Block(1, new Date(), newTransaction, previousBlockHash);
        this.blockchain.push(newBlock);

    }


}

export {
    Blockchain
}