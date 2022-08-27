import { AssetTracking } from './examples/assetTracking';
import { Library } from './examples/library';
import { Blockchain} from './services/blockchain';


// Example with Library
let bookBlockChain = new Blockchain();
let library = new Library(bookBlockChain);
library.rent(11111, new Date(2022, 9));
library.rent(22222, new Date(2022, 7));
console.log(bookBlockChain.blockchain);


// Example with Asset
// let assetBlockChain = new Blockchain();
// let assetInventory = new AssetTracking(assetBlockChain);
// assetInventory.addAssetToInventory("Macbook Pro 2017", true, 23);
// assetInventory.addAssetToInventory("Dell Latitude 5450", true, 32);
// assetInventory.addAssetToInventory("Macbook Pro 2017", false, 23);
// console.log(assetBlockChain.blockchain);
