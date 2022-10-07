import { AssetTracking } from './examples/assetTracking';
import { Library } from './examples/library';
import { Bitcoin } from './examples/bitcoin';
import { Block } from "./block";
import { Blockchain} from './services/blockchain';

// Example with Bitcoin Transaction Start
// Generate the genesis block and Initiate chain
let genesisData = { from: 'world', to: 'ferdous', amount: '5000000' };
let genesisBlock = new Block(0, new Date, genesisData, "");

let bitcoinBlockChain = new Blockchain(genesisBlock);

let bitcoin = new Bitcoin(bitcoinBlockChain);

bitcoin.transaction("ferdous", "rakib", "35000");
bitcoin.transaction("rakib", "rahul", "5000");
bitcoin.transaction("rahul", "ferdous", "15000");

console.log(JSON.stringify(bitcoinBlockChain.blockchain, null, 5));

// End Bitcoin Transaction

// Example with Library
// let genesisData = { bookId: 0, rentOn: "2022-07-31T18:00:00.000Z", returnOn: "2022-07-31T18:00:00.000Z" };
// let genesisBlock = new Block(0, new Date, genesisData, "");

// let bookBlockChain = new Blockchain(genesisBlock);

// let library = new Library(bookBlockChain);

// library.rent(11111, new Date(2022, 9));
// library.rent(22222, new Date(2022, 7));

// console.log(JSON.stringify(bookBlockChain.blockchain, null, 5));

// End Bitcoin Transaction

// Example with Asset
// let genesisData = { name:"Ferdousul Haque", state: true, currentOwnerId: 10101010 };
// let genesisBlock = new Block(0, new Date, genesisData, "");

// let assetBlockChain = new Blockchain(genesisBlock);

// let assetInventory = new AssetTracking(assetBlockChain);

// assetInventory.addAssetToInventory("Macbook Pro 2017", true, 23);
// assetInventory.addAssetToInventory("Dell Latitude 5450", true, 32);
// assetInventory.addAssetToInventory("Macbook Pro 2017", false, 23);

// console.log(JSON.stringify(assetInventory.blockchain, null, 5));
