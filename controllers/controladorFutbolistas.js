//Importar de express las varibles rquest y response
const { request,response }=require('express');


//SE CREAN FUNCIONES PARA CADA UNO DE LOS SERVICIOS QUE PRESTARÁ EL API
//(EL MENÚ DEL RESTAURANTE)

function buscarFutbolistas(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo GET desde el controlador'
    });

    
}

function agregarFutbolista(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo POST'
    });

}

function editarFutbolista(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo PUT'
    });

}

function eliminarFutbolista(peticion=request,respuesta=response){

    respuesta.json({
        estado:true,
        mensaje:'PLATO de tipo DELETE'
    });

}


//EXPORTO(ENVIO) TODAS LAS FUNCIONES HACIA EL ARCHIVO DE RUTAS
module.exports={
    buscarFutbolistas,
    agregarFutbolista,
    editarFutbolista,
    eliminarFutbolista
}