import { SHA256 } from "crypto-js";
import { Block } from "../block";
import { contract } from "./contract";
import moment from 'moment';


class Blockchain implements contract{
    blockchain!: Block;

    constructor() {
        // this.blockchain = [];
    }

    generateHash(previousBlock: string): any{
        return "";
    }

    previousBlock(): Block{
        return new Block(0, new Date(), JSON.stringify({ "test": 1 }), "");
    }

    generateBlock(){
        return "";
    }

    proofOfWork(){
        return "";
    }

    mining(){
        return "";
    }

    appendToChain() {
        // newBlock.nextHash = this.latestBlock().hash;
        // newBlock.hash = newBlock.computeHash();
        // this.block1chain.push(newBlock);
    }


}