import { Block } from "../block";

interface contract {
    // For generating the hash of the previous block
    generateHash(previousBlock: string): any;

    // For getting the previous block of the chain
    previousBlock(): Block;

    // Generating a single block for adding in the chain
    generateBlock(): any;

    // Proof of work for calculation
    proofOfWork(): any;

    // For mining, the blocks
    mining(): any;

    // For appening to the block chain
    appendToChain(): any;
}

export {
    contract
};