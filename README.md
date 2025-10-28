# [SpaceTI]

Página web enfocada en información relacionada con el mundo TI y el espacio. Cuenta también con un shop asociado al desarrollo.

## Demo
- Vercel: [https://evaluacion-2-grupo-4-nidw.vercel.app/](https://evaluacion-2-grupo-4-nidw.vercel.app/)
- GitHub: [https://github.com/dinogamboa111/Evaluacion-2-Grupo-4](https://github.com/dinogamboa111/Evaluacion-2-Grupo-4)

## Tecnologías
- React 18
- Bootstrap 5
- React-Bootstrap
- React Router v6
- Jasmine + Karma (para testing)
- React Testing Library

## Instalación y Uso

Sigue estos pasos para preparar y ejecutar el proyecto en tu máquina local.

1.  **Clonar e Instalar:**
    Clona el repositorio, entra al directorio e instala todas las dependencias.
    ```bash
    git clone [https://github.com/dinogamboa111/Evaluacion-2-Grupo-4.git](https://github.com/dinogamboa111/Evaluacion-2-Grupo-4.git)
    cd Evaluacion-2-Grupo-4
    npm install
    ```

2.  **Ejecutar el Proyecto:**
    Esto iniciará la aplicación de React en modo de desarrollo.
    ```bash
    npm start
    ```

3.  **Ver la Aplicación:**
    Una vez que el proceso esté corriendo, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Pruebas (Testing)

Testing

Este proyecto utiliza varias herramientas para garantizar la calidad del código y la funcionalidad de los componentes:

- Karma: Test runner que ejecuta las pruebas en diferentes navegadores.

- Jasmine: Framework de pruebas para escribir tests de manera clara y estructurada.

- React Testing Library: Biblioteca que facilita testear componentes de React simulando la interacción real del usuario.

Las pruebas incluyen validación de formularios, interacción con inputs, selects y checkboxes, asegurando una cobertura mínima del 80%.

##Testing
Cobertura: 89.39%

(Cobertura de "Statements" lograda en las 35 pruebas unitarias ejecutadas con Karma y Jasmine sobre el componente Contact).

```bash
## Ejecutar la suite de tests completa en modo interactivo (watch mode)
npm test

## Ejecutar SÓLO los tests que incluyen la palabra "Contact"
npx karma start --grep="Contact"
```

##Funcionalidades

- Visualización de Noticias (RF-001): Muestra artículos de tecnología y espacio con imagen, título y descripción.

- Galería de Imágenes (RF-002): Presenta una galería visual sobre el ciclo de vida de un proyecto de software.

- Gestión del Carrito de Compras (RF-003): Permite agregar, eliminar y modificar productos en un carrito, incluyendo un flujo de pago simulado en un modal.

- Formulario de Contacto (RF-004): Incluye un formulario completo con validaciones en tiempo real para el envío de consultas.

- Navegación SPA (RF-005): Utiliza React Router para una navegación fluida entre secciones sin recargar la página.

- Diseño Responsivo (RNF-USA-01): La interfaz se adapta a dispositivos móviles, tablets y escritorio.

##Autores

- Robinson Arriagada
- Jaime Delgadillo
- Camila Erices
- Dino Gamboa

