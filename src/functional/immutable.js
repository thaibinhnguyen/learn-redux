// import { Map } from 'immutable';

// let book = Map({ title : "Harry Porter"});

// function publish(book) {
//     return book.set("isPublished", true);
// }

// book = publish(book)

// console.log(book.toJS())

import { produce } from 'immer';

let book = { title: "Harry Potter "};

function publish(book) {
    return produce(book, draftbook => {
        draftbook.isPublished = true;
    })
}
let updated = publish(book);
console.log(updated);