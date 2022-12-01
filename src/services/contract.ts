import { Block } from "../block";

interface SmartContract {
    // For generating the hash of the previous block
    generateHash(timestamp: string, transactionData: string): any;

    // For getting the previous block of the chain
    previousBlock(): Block;

    // Generating a single block for adding in the chain
    generateBlock(data: any): any;

    // Proof of work for calculation to confirm the integrity of the chain
    validateChainIntegrity(): any;

    // For appening to the block chain
    appendToChain(newTransaction: any): void;
}

export {
    SmartContract
};