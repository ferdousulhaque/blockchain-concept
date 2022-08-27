import { Contract } from '../services/contract';

class AssetTracking {
    blockchain;
    asset = {
        name: "",
        state: false
    };

    constructor(blockchain: Contract){
        this.blockchain = blockchain;
    }

    addAssetToInventory(name: string, state: boolean){
        this.asset = {
            name: name,
            state: state
        };

        this.blockchain.appendToChain(this.asset);
    }
}

export {
    AssetTracking
}