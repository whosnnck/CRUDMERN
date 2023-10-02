const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    nombre : {
        type : String,
        required : [true, "Se necesita el nombre"],
        unique : [true, "Nombre existente"]
    },
    calificacion : {
        type : Number,
        required : [true, "Se necesita una calificacion"],
        min: [1],
        max: [10]
    },
    descripcion : {
        type : String,
        required : [true, "Se necesita una descripcion"]
    },

    pgi : {
        type : String,
        required : [true, "Se necesita el PGI del juego"]
    } 
})

module.exports = mongoose.model("Game", gameSchema, "Games")