const fs= require('fs');

const remove = function (title) {
    const notes = loadNotes();//load the notes from the file 
    if (notes.length!== 0) {
        
        const filteredNotes = notes.filter(note => {
            if (note.title !== title)
            {
                return note;
                }
        })
        
        const JsonNotes=JSON.stringify(filteredNotes);
        fs.writeFileSync('Notes.json', JsonNotes);
        console.log("The note is deleted...",title);
    }
    
    else {
        console.log("OOPS ... error ")
    }
  

}

const loadNotes = function () {
    
    try {
        const bufferData = fs.readFileSync('Notes.json');
        const stringData = bufferData.toString();
        return JSON.parse(stringData);
    }
    catch (error) {
        return [];
    }
}


module.exports = ({
    remove:remove
})