import http from 'k6/http' //Importacion de la libreria de K6
import { check, fail } from 'k6' //Checks de K6

export default function () {
    var respuesta = http.get('https://cursotesting.com.ar:3000');
    var validacion = check(
        respuesta,
        {
            'el codigo de respuesta sea 200': (respuesta) => respuesta.status == 200
        }
    )
}