import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'Verificacion que la pagina contiene el siguiente texto': (r) =>
      r.body.includes('Sample script'),
    'El status es 200': (r)=> r.status === 200
  });
}

//codigo de verificacion que el la respuesta muestre el texto señalado a partir de la linea 6
// y se le agrega la verificacion que el estado sea 200