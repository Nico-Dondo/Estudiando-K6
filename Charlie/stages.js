// Las pruebas de Stages o etapas sirven para poder variar los picos, su duracion en tiempo y cantidad

import http from 'k6/http';
import {check, sleep} from 'k6';

export const options ={
    stages:[
        {duration: '30s', target:20}, //en 30 segundos tiene 20 usuarios
        {duration: '1m30s', target: 10},//en 1m30 segundos tiene 10 usuarios
        {duration: '20s', target:0}//en 20 segundos tiene 0 usuarios
    ]
}
export default function(){
    const res = http.get('https://mercadolibre.com.ar');
    check(res, {'status was 200':(r) => r.status == 200});// es una asersion
    sleep(1)
}