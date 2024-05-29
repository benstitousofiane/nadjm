const express = require('express')
const app = express()
const port = 3000


app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.static("./views")) //for other things than ejs as css or scripts


app.get("/", (req,res) => {
    res.render("index.ejs", {surah_number: NaN})
})

app.get("/:surah_number", (req, res) => {

    if (parseInt(req.params.surah_number) && parseInt(req.params.surah_number) >= 1 && parseInt(req.params.surah_number) <= 114){
        res.render("index.ejs", {surah_number: req.params.surah_number})
    }
    else{
        res.render("invalide.ejs")
    }
})

app.listen(port, (err) => { 
    if (err){
        console.log("Erreur du démarrage de l'application")
    }
    else{
        console.log(`Application démarré sur le port ${port}`)
    }
})