import http from 'k6/http' //Importacion de la libreria de K6
import { check,fail } from 'k6' //Checks de K6

respuesta = http.get('http://cursotesting.com.ar:3000') //Consumo de APi

//Bloque de asersiones que se llaman desde el punto de lapeticion de la url
check(
   respuesta,
    {
        'el codigo de respuesta sea 200': respuesta.status == 200
    }
)
//
