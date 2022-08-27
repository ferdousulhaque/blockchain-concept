import { AssetTracking } from './examples/assetTracking';
import { Library } from './examples/library';
import { Blockchain} from './services/blockchain';

let basicBlockChain = new Blockchain();

// Example with Library
let library = new Library(basicBlockChain);
library.rent(12344, new Date(2022, 9));


// Example with Asset
let assetInventory = new AssetTracking(basicBlockChain);
assetInventory.addAssetToInventory("Macbook Pro 2017", true);