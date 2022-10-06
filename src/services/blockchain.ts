import { SHA256 } from "crypto-js";
import { Block } from "../block";
import { Contract } from "./contract";
import moment from 'moment';


class Blockchain implements Contract {
    blockchain: Block[] = [];
    difficulty: number;
    blockTime: number;

    constructor(genesisBlock: Block) {
        this.difficulty = 1;
        this.blockTime = 30000;

        // Create our genesis kickoff block
        this.blockchain = [];
        this.blockchain.push(Object.freeze(genesisBlock));
    }

    generateHash(timestamp: string, transactionData: string): any{
        // previous block hash is used for the chain
        return SHA256(
            this.previousBlock().getHash() +
            timestamp +
            JSON.stringify(transactionData)
        ).toString();
    }

    previousBlock(): Block{
        return this.blockchain[this.blockchain.length - 1];
    }

    generateBlock(data: any): Block{
        return new Block(0, new Date(), JSON.stringify(data), "");
    }

    validateChainIntegrity(){
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
        // console.log(this.previousBlock());
        let newBlock = new Block(this.blockchain.length, new Date(), newTransaction, previousBlockHash);
        newBlock.mine(this.difficulty);
        this.blockchain.push(Object.freeze(newBlock));

        // As per bitcoin's difficulty formula
        this.difficulty += Date.now() - parseInt(this.previousBlock().getTimestamp()) < this.blockTime ? 1 : -1;
    }


}

export {
    Blockchain
}