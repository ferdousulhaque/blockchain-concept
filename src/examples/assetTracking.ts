import { SmartContract } from '../services/contract';

class AssetTracking {
    blockchain;
    asset = {
        name: "",
        state: false,
        currentOwnerId: 0
    };

    constructor(blockchain: SmartContract){
        this.blockchain = blockchain;
    }

    addAssetToInventory(name: string, state: boolean, ownerId: number){
        this.asset = {
            name: name,
            state: state,
            currentOwnerId: ownerId
        };

        this.blockchain.appendToChain(this.asset);
    }
}

export {
    AssetTracking
}