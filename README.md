# Estudio sobre k6

Este repositorio está dedicado al estudio y la práctica de **k6**, una herramienta de código abierto para realizar pruebas de carga y rendimiento en aplicaciones. k6 permite a los desarrolladores y testers simular múltiples usuarios concurrentes para evaluar cómo se comporta una aplicación bajo diferentes condiciones de carga.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Ejemplos de Código](#ejemplos-de-código)

## Instalación

Para instalar k6, puedes seguir los siguientes pasos según tu sistema operativo:

### En Windows

1. **Usando Chocolatey**:
   - Abre PowerShell como administrador y ejecuta:
     ```bash
     choco install k6
     ```

2. **Usando el instalador de Windows**:
   - Descarga el instalador desde la [página oficial de k6](https://k6.io/docs/getting-started/installation).

### En macOS

1. **Usando Homebrew**:
   - Abre la terminal y ejecuta:
     ```bash
     brew install k6
     ```

### En Linux

1. **Usando APT (Debian/Ubuntu)**:
   - Abre la terminal y ejecuta:
     ```bash
     sudo apt update
     sudo apt install k6
     ```

2. **Usando el binario**:
   - Descarga el binario desde la [página oficial de k6](https://k6.io/docs/getting-started/installation) y sigue las instrucciones.

## Ejecución

Una vez instalado, puedes ejecutar un script de prueba utilizando el siguiente comando:

```bash
k6 run nombre_del_script.js

## Ejemplos de codigo de ejecucion sencilla
# Este script realiza una solicitud GET a un sitio web y espera 1 segundo entre cada solicitud.

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
}

## Otro codigo
# Este script verifica que la respuesta tenga un estado 200.

import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
   let res = http.get('https://test.k6.io');
   check (res,{
    'status is 200':(r)=> r.status === 200,
   });
   sleep(1);
}