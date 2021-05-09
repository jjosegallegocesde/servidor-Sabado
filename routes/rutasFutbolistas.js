//TRAIGO EL METODO ROUTER DE EXPRESS PARA PERSONALIZAR MIS RUTAS
const { Router }= require('express');

//IMPORTAR(TRAER) LOS CONTROLADORES
const { buscarFutbolistas }= require('../controllers/controladorFutbolistas.js');
const { agregarFutbolista }= require('../controllers/controladorFutbolistas.js');
const { editarFutbolista }= require('../controllers/controladorFutbolistas.js');
const { eliminarFutbolista }= require('../controllers/controladorFutbolistas.js');

//PERSONALIZO MIS RUTAS:
const rutas=Router();


//LISTADO DE RURAS
rutas.get('/jugadores',buscarFutbolistas);
rutas.post('/jugador/nuevo',agregarFutbolista);
rutas.put('/jugador/editar',editarFutbolista);
rutas.delete('/jugador/eliminar',eliminarFutbolista)


//EXPORTO LAS RUTAS
module.exports=rutas;
