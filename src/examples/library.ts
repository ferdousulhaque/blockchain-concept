import moment from 'moment';
import { Contract } from '../services/contract';

class Library {
    blockchain;
    book = {
        bookId: 0,
        rentOn: new Date(2022, 8),
        returnOn: new Date(2022, 9)
    };

    constructor(blockchain: Contract) {
        this.blockchain = blockchain;
    }

    rent(bookId: number, rentOn: Date): void {
        this.book = {
            bookId: bookId,
            rentOn: rentOn,
            returnOn: new Date(moment().add(7, 'd').format('YYYY-MM-DD'))
        };

        this.blockchain.appendToChain(this.book);
    }
}

export {
    Library
}