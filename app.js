const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Add,remove,list,read
yargs.command({
    command:'add',
    description:'Add a note',
    builder:{
        title:{
            description:"Note title",
            demandOption: true,
            type: "string"
        },
        body:{
            description:"Note Body",
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    description: 'Remove a note',
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            description:'Note body',
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command:'list',
    description:'List a note',
    builder:{
        title:{
            description:'Note Title',
            demandOption:true,
            type:"string"
        },
        body:{
            description:'Note body',
            type:"string"
        }
    },
    handler(){
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    description:'Read a note',
    builder:{
        title:{
            description: 'Note-Title',
            demandOption:true,
            type:'string'
        },
        body:{
            description:'Note-Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title,argv.body)
    }
})

yargs.parse()