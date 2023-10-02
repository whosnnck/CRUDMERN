const Game = require ("../models/gameModel");

//Display all data
const game_index = (req,res) => {
    Game.find(function (err, CRUD){
        res.json(CRUD);
    })
};

//Add a new Game
const game_create_post = (req, res) => {
    let game = new Game(req.body);
    game
    .save()
    .then((game) => {
        res.send(game);
    })
    .catch(function(err){
        res.status(422).send("Fallo de ingreso de datos");
    });
};

//Edit game by id
const game_update = (req,res) => {
    Game.findByIdAndUpdate(req.params.id, req.body)
    .then(function(){
        res.json("Juego actualizado")
    })
    .catch(function(err){
        res.status(422).send("No se pudo actualizar el juego")
    });
};

//Borrar Juego por ID
const game_delete = (req,res) => {
    Game.findById(req.params.id, function (err, game){
        if(!game){
            res.status(404).send("No se encontro el juego");
        }else{
            Game.findByIdAndRemove(req.params.id)
            .then(function (){
                res.status(200).json("Juego eliminado");
            })
            .catch(function(err){
                res.status(400).send("Error en la eliminacion")
            });
        };
    });
};

module.exports = {
    game_create_post,
    game_delete,
    game_index,
    game_update
}