# road graph

## Modules

### Graph Module (`graph.js`)
**Responsibility**: This module will be responsible for creating and managing the route graph.

### Routes Module (routes.js)
**Responsibility**: This module will contain the predefined routes between the different points.

### Main Module (main.js)
**Responsibility**: This module will integrate the previous modules and execute the main logic of the program.

## Dependencies 

- main.js depends on graph.js and routes.js.
- graph.js does not depend on any other modules.
- routes.js does not depend on any other modules.

## previously written in NPM

- graphlib: A library for graph manipulation.

## I prefer to use an NPM library since they are tested and optimized, which can save us time