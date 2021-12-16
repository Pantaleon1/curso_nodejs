const {request, response} = require("express");

const usuariosGet = (req = request, res = responde) => {res.json({msg: "Hola Pantaleon desde GET"}); };

const usuariosPost =(req = request, res = responde) => {
    const {nombre, apellido, email, edad = 0 } = req.body;
    res.status(201).json({msg: "Hola Pantaleon desde POST", edad}); };

const usuariosPut =(req = request, res = responde) => {
    const {id} = req.params;
    res.status(400).json({msg: "Hola Pantaleon desde PUT", id}); };

const usuariosDelete =(req = request, res = responde) => {
    const {usuario, password} = req.query;
    res.status(500).json({msg: "Hola Pantaleon desde DELETE", usuario, password}); };

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete};