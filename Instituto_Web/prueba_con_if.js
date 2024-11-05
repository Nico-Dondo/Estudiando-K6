import http from 'k6/http'; // Importación de la librería de K6
import { check, fail } from 'k6'; // Checks de K6

export default function () {
    const respuesta = http.get('https://cursotesting.com.ar:3000');//si aca le cambio un parametro y se ejecuta entra a el else

    if (check(respuesta, { 'el código de respuesta sea 200': (respuesta) => respuesta.status == 200 })) {
        // Aquí va el código si la respuesta es 200
    } else {
        check(respuesta, {
            'el código de respuesta es 400': (respuesta) => respuesta.status == 400 // Corrección aquí
        });
        // Aquí va el código si la respuesta no es 200
    }
}