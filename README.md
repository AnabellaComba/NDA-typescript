# DESCRIPCION

Volvemos al ejercicio del Calendario pero esta vez vamos a utilizar Typescript en lugar de JavaScript.
Typescript es una serie de reglas extra que se usan por encima de Javascript convirtiendo a Javascript de un lenguaje debilmente tipado a
un lenguaje fuertemente tipado, además TS (Typescript) cuenta con una serie de herramientas extra que facilitan la lectura y el manejo de errores

# OBJETIVO

El proyecto ya está completamente terminado en este caso, lo unico que tienen que conseguir de alguna forma es que funcione. En la consola cuando lo ejecuten probablemente vean "Refused to execute script from..." eso se debe a que Typescript a diferencia de Javascript no puede ser interpretado por el
navegador y debe ser traducido.

Encuentren la forma de convertir Typescript a Javascript para que el codigo lo interprete.

(Este ejercicio se resuelve descargando TS y usando un comando)

# TEST TEORIA

1. ¿Qué diferencias tiene TS con JS?

1.Las diferencias entre TS y JS: 

1-Tipado

JS: Es un lenguaje dinámicamente tipado. No tienes que declarar el tipo de las variables.
let edad = 25; // JS infiere el tipo
edad = "veinticinco"; // No hay error en tiempo de compilación
TS: Es estáticamente tipado. Puedes (y deberías) declarar tipos. Esto ayuda a detectar errores antes de ejecutar el código.
let edad: number = 25;
edad = "veinticinco"; // ❌ Error de compilación

2-Compilación
JS: Se ejecuta directamente en el navegador o Node.js.
TS: No se ejecuta directamente. Debe compilarse a JS usando tsc (TypeScript Compiler). Esto genera un JS que luego se puede ejecutar.

3- Clases y OOP
Ambos soportan clases, pero TS tiene mejoras:
Modificadores de acceso: private, protected, public.
Interfaces: Para definir contratos de objetos.
Tipos genéricos: Para funciones y clases reutilizables con tipado seguro.
/*class Persona {
  private nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
}*/

4-Herramientas de desarrollo
TS mejora mucho la autocompletación, refactorización y detección de errores en editores como VS Code, porque sabe los tipos de las variables y funciones.
JS solo puede inferir algunos tipos, pero es menos seguro.

5-Soporte moderno
TS incluye features modernas de JS (ES6, ES7…) y algunas adicionales, pero siempre compila a JS compatible con navegadores antiguos si lo configuras.

6-Curva de aprendizaje
TS requiere aprender sobre tipos, interfaces, enums, y cómo compilar.
JS es más rápido de empezar porque no exige tipado ni compilación.
































