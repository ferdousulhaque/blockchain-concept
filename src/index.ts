import { AssetTracking } from './examples/assetTracking';
import { Library } from './examples/library';
import { Bitcoin } from './examples/bitcoin';
import { Blockchain} from './services/blockchain';

// Example with Bitcoin Transaction
let bitcoinBlockChain = new Blockchain({ from: 'world', to: 'ferdous', amount: '5000000' });
let bitcoin = new Bitcoin(bitcoinBlockChain);

bitcoin.transaction("ferdous", "rakib", "35000");
bitcoin.transaction("rakib", "rahul", "5000");
bitcoin.transaction("rahul", "ferdous", "15000");

console.log(bitcoinBlockChain.blockchain);

// Example with Library
// let bookBlockChain = new Blockchain();
// let library = new Library(bookBlockChain);

// library.rent(11111, new Date(2022, 9));
// library.rent(22222, new Date(2022, 7));

// console.log(bookBlockChain.blockchain);


// Example with Asset
// let assetBlockChain = new Blockchain();
// let assetInventory = new AssetTracking(assetBlockChain);

// assetInventory.addAssetToInventory("Macbook Pro 2017", true, 23);
// assetInventory.addAssetToInventory("Dell Latitude 5450", true, 32);
// assetInventory.addAssetToInventory("Macbook Pro 2017", false, 23);
// console.log(assetBlockChain.blockchain);
