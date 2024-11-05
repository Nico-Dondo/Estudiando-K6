import http from 'k6/http'; // Importación de la librería de K6
export const options = {
    stages: [ //en JMeter sería el grupo de hilos
        { duration: '1s', target: 2 },
        { duration: '10s', target: 8 }
    ],
    thresholds: {
        http_req_failed: ['rate<0.01'], //fallas menores al 0.1 %
        http_req_duration:['p(90)<285']
    }
};

export default function () {
    const url = 'https://www.cursotesting.com.ar:3000/personas/nueva';

    const datos = JSON.stringify({
        nombre: "Nico",
        apellido: 'Diaz',
        edad: 35,
        pais: 'Uruguay'
    });

    const parametro = {
        headers: { // Se cambia 'Headers' a 'headers'
            'Content-type': 'application/json'
        }
    };

    http.post(url, datos, parametro);
}
