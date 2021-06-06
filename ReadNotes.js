const fs = require('fs');
const chalk = require('chalk');

const ReadNote = (title) => {

    const notes = LoadNotes();

    
    if (notes.length !== 0) {
     
        const required_note = notes.find(note => note.title === title);
        
        if (required_note === undefined) {
            console.log(chalk.bgWhiteBright.bold("Note does not exists!!!"));
        }
        else {
            console.log(chalk.bgMagenta.italic("TITLE::", required_note.title));

            console.log(chalk.green.bold.underline("BODY:: ",required_note.body))
        }

    }
    else
    {
        console.log(chalk.bgWhiteBright("Title Does not exists!!"))
        }

}

const LoadNotes = () => {
    try {
        const bufferData = fs.readFileSync('Notes.json');
        const stringData = bufferData.toString();
        return JSON.parse(stringData);
    } catch (e) {
        return [];
    }
}//load notes 


module.exports = {
    ReadNote:ReadNote
}