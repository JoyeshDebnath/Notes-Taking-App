const fs = require('fs');
const chalk = require('chalk');
const getNote = function () {
    console.log("Your notes is ....");
}

const addNote = function (title, body) {
    
    const note = loadNote();
    const find_duplicate = note.find(n=>n.title=== title) 
    // const containsDuplicates = note.filter((n) => {
    //     return n.title === title;
    // })//creates a new array (boolean )
    if (find_duplicate===undefined)
    {
         note.push({
        title:title,
        body:body
    });

    saveNote(note);
        console.log(chalk.bgYellow("Notes added 😁😁😁😁😁😁"));
    }
    else
    {
        console.log(chalk.bgYellow("Note is Duplicate🤐🤐🤐🤐🤐🤐🤐"))
    }
    
   
}

//save the notes to the json file ..
const saveNote = function (notes) {
    
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('Notes.json', dataJson);
}

//loading the data from notes.json file ...
const loadNote = function () {
    try {
    const bufferData = fs.readFileSync('Notes.json');
    const dataJson = bufferData.toString();
    const parseData = JSON.parse(dataJson);
    return parseData;
    }
    catch (e) {
        return [];
   }
  

}


// const remove = function (title) {
//     // const notes = loadNotes();//load the notes from the file 
//     // if (notes.length!== 0) {
        
//     //     const filteredNotes = notes.filter(note => {
//     //         return note.title!==title
//     //     })
        
//     //     fs.writeFileSync('Notes.json', filteredNotes);
//         console.log("The note is deleted...",title);
//     // }
//     // else {
//     //     console.log("OOPS ... error ")
//     // }
  

// }

module.exports = {
    getNote: getNote,
    addNote: addNote
    // remove:remove

};
