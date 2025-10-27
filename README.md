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

El proyecto está configurado con Karma y Jasmine para pruebas unitarias. Puedes ejecutar la suite completa o filtrar por tests específicos.

```bash
## Ejecutar la suite de tests completa en modo interactivo (watch mode)
npm test

## Ejecutar SÓLO los tests que incluyen la palabra "Contact"
npx karma start --grep="Contact"
