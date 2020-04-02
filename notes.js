const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=>{
    return 'Your Notes';
}

const addNotes = (title,body)=>{
    const notes = lastNote()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        fs.writeFileSync('notes.json',JSON.stringify(notes))
    }else{
        console.log("Value is already present")
    }

}
const lastNote = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        console.log("some error occured")
        return []
    }
}

const removeNotes = (title) => {
    const notes = lastNote()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse("Note is removed"))
        fs.writeFileSync('notes.json',JSON.stringify(notesToKeep))
    }else{
        console.log(chalk.red.inverse("No note is removed"))
    }
}

const listNotes = () => {
    const notes = lastNote()
    notes.forEach(element => {
        console.log(chalk.blue.inverse(element.title))
    });
}

const readNotes = (title,body) => {
    const notes = lastNote()
    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.green.inverse.bold.underline(JSON.stringify(note.title)))
        console.log(chalk.green.inverse.underline(JSON.stringify(note.body)))

    }else{
        console.log(chalk.red.bold.inverse("Nothing is found"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes, 
    listNotes: listNotes,
    readNotes: readNotes
}