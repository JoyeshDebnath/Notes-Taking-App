const fs = require('fs');
const chalk = require('chalk');

const ListItems = () => {
     const notes = LoadNotes();
    if (notes.length > 0) {
      
        console.log(chalk.bgBlue("Your Notes are being listed below ..."));
    //traverse and print the title
     notes.forEach(note=>console.log(chalk.bgGreenBright.bold("Title:",note.title)))   
    
    }
    else {
        console.log(chalk.bgRed.bold("No notes....."))
    }

}

const LoadNotes = () => {

    try {
        const bufferData = fs.readFileSync('Notes.json');
        const dataString = bufferData.toString();
        return JSON.parse(dataString);
    }
    catch (err) {
        return [];
    }
}

module.exports = {
    ListItems:ListItems
}