import { SHA256 } from "crypto-js";

class Block {
    index;
    current_time;
    info;
    nextHash;
    hash;

    constructor(index: any, current_time: Date, info: any, nextHash = " ") {
        this.index = index;
        this.current_time = current_time;
        this.info = info;
        this.nextHash = nextHash;
        this.hash = this.computeHash();
        return this;
    }

    computeHash() {
        return SHA256(this.info + this.nextHash + this.current_time + JSON.stringify(this.info)).toString();
    }
}

export {
    Block
}