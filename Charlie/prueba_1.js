import http from 'k6/http';
import { sleep } from 'k6';

// La siguinte es una forma de pasar por medio de una constante la cantidad de usuarios virtuales (vus) y el tiempo de ejecucion lo que hace que no se tenga que 
// agregar nada por consola para correr la prueba
export const options = {
    vus: 40,
    duration: '15s'
}
export default function () {
    http.get('https://test.k6.io')
    sleep(1);
}

