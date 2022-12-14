import { SHA256 } from "crypto-js";

class Block {
    index;
    timestamp;
    transactionData;
    previousHash;
    hash;
    nonce;

    constructor(index: any, timestamp: Date, transactionData: any, previousHash = " ", nonce = 0) {
        this.index = index;
        
        this.timestamp = timestamp;
        
        this.transactionData = transactionData;
        
        this.previousHash = previousHash;
        
        this.hash = this.generateHash();
        
        this.nonce = nonce;
        
        return this;
    }

    generateHash(): string {
        // previous block hash is used for the chain
        return SHA256(
            this.previousHash + 
            this.timestamp + 
            JSON.stringify(this.transactionData) +
            this.nonce
        ).toString();
    }

    getTimestamp(): any {
        // previous block hash is used for the chain
        return this.timestamp;
    }

    getHash(): any {
        // previous block hash is used for the chain
        return this.hash;
    }

    mine(difficulty: number) {
        // Basically, it loops until our hash starts with 
        // the string 0...000 with length of <difficulty>.
        while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
            // We increases our nonce so that we can get a whole different hash.
            this.nonce++;
            // Update our new hash with the new nonce value.
            this.hash = this.generateHash();
        }
    }
}

export {
    Block
}