import { SHA256 } from "crypto-js";

class Block {
    index;
    current_time;
    info;
    previousHash;
    hash;

    constructor(index: any, current_time: Date, info: any, previousHash = " ") {
        this.index = index;
        this.current_time = current_time;
        this.info = info;
        this.previousHash = previousHash;
        this.hash = this.getHash();
        return this;
    }

    getHash(): string {
        return SHA256(this.info + this.previousHash + this.current_time + JSON.stringify(this.info)).toString();
    }

    mine(difficulty: number) {
        // Basically, it loops until our hash starts with 
        // the string 0...000 with length of <difficulty>.
        // while (!this.hash.startsWith(Array(difficulty + 1).join("0"))) {
        //     // We increases our nonce so that we can get a whole different hash.
        //     this.nonce++;
        //     // Update our new hash with the new nonce value.
        //     this.hash = this.getHash();
        // }
    }
}

export {
    Block
}