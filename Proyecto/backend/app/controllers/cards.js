const db = require("../models");
const axios = require('axios');
const CardsValueTasaCambio = db.cardsValueTasaCambio;

exports.Card = CardsValueTasaCambio;
exports.axios = axios;

// Actualiiza las giftcards en la base de datos
exports.actualizar = (req, res) => {
    CardsValueTasaCambio.deleteMany({}, () => { });
    axios.get('https://my-json-server.typicode.com/18sergiosilva/so2juegos/db')
        .then(resp => {
            CardsValueTasaCambio.insertMany(resp.data)
                .then(() => { })
            return res
                .status(200)
                .send({ message: "juegos actualizados" });
        })
        .catch(err => {
            return res
                .status(500)
                .send({ message: `Error al actualizar los juegos` });
        });
};

function obtenerDatos(res){
    return CardsValueTasaCambio.find({})
        .then((data) => {
            return res
                .status(200)
                .send({ message: "Se devolvieron los juegos.", cards: data });
        })
        .catch(err => {
            return res
                .status(500)
                .send({ message: `Error de la base de datos al devolver los juegos.` });
        });
}
exports.obtenerDatos = obtenerDatos;

// Obtener todas las giftcards
exports.getAll = (req, res) => {
    obtenerDatos(res)
};

function obtenerTasaCambios(res){
    return CardsValueTasaCambio.find({})
        .then((data) => {
            return res
                .status(200)
                .send({ message: "Se devuelve la tasa de cambio.", TasaCambio: data.TasaCambio });
        })
        .catch(err => {
            return res
                .status(500)
                .send({ message: `Error de la base de datos al devolver la tasa de cambio.` });
        });
}
exports.obtenerTasaCambios = obtenerTasaCambios;

function obtenerPrecios(res){
    return CardsValueTasaCambio.find({})
        .then((data) => {
            return res
                .status(200)
                .send({ message: "Se devuelven los precios.", precios: data.value });
        })
        .catch(err => {
            return res
                .status(500)
                .send({ message: `Error de la base de datos al devolver los precios.` });
        });
}
exports.obtenerPrecios = obtenerPrecios;
