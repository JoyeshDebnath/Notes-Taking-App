const { getNote, addNote } = require('./notes');
const { remove } = require('./RemoveNote');
const { ListItems} = require('./ListNotes');
const { ReadNote}=require('./ReadNotes');
const validator = require('validator');
const chalk = require('chalk');


const yargs=require('yargs');
const command = process.argv[2];
yargs.version('1.1.0');


//Add  Remove Read   List       
yargs.command({
    command: 'add',
    describe: 'Add a New Note 😀😀',
    builder: {
        title: {
            describe: "Note Title ",
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body ',
            demandOption: true,
            type:'string'
        }
    },

    handler: function (argv) {

        addNote(argv.title, argv.body);
        
}
})

//Remove
yargs.command({
    command: 'remove',
    describe: 'type remove to remove items',
    builder: {
         title: {
            describe: "Note Title ",
            demandOption: true,
            type:'string'
        }
        
    },
    handler: function (argv) {
        remove(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing the note ',
    handler: function () {ListItems()}
})

yargs.command({
    command: 'read',
    describe: 'reading the item',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type:'string'
        }
    },
    handler:(argv)=> {ReadNote(argv.title)}
})

yargs.parse();
// console.log(yargs.argv);
