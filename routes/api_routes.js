const fs = require('fs');
const app = require('express').Router();
let db = require('../db/db.json');

//CRUD - create read update delete - data (database / json)
app.get('/notes',(req,res) =>{
    db = JSON.parse(fs.readFileSync("./db/db.json"))
    res.json(db)
})


app.post('/notes',(req,res)=>{
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor (Math.random()* 4000)
    }
    db.push(newNote)
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err,data){
        if(err){
            console.log(err)
            throw err
        }
    })
    res.json(db)
})


app.delete('/notes/:id',(req,res)=>{
    const removeNotes = []
        for ( let i =0; i < db.length; i++){
            if (db[i].id != req.params.id){
                removeNotes.push(db[i])
            }
        }
    db = removeNotes

    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err,data){
        if(err){
            console.log(err)
            throw err
        }
    })
    console.log(db);

    res.json(db)

});


module.exports = app;