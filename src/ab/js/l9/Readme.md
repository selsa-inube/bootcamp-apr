# Project Modular Structure

## graph.js

\*\* The graph.js module is responsible for building and managing the road graph based on the provided list of connections (carreteras).

### search.js

\*\* The search.js module depends on graph.js to perform search operations on the graph, such as finding routes between specific locations.

#### main.js

\*\* The main.js file acts as the entry point of the application, where the above modules are used to perform specific actions, such as finding routes between locations.

##### Interfaces and Dependencies

- Interfaces: Each module exports specific functions (buildGraph in graph.js and findPath in search.js) that represent the public interfaces for interaction.

- Dependencies: search.js depends on graph.js to access the road graph (roadGraph) and perform search operations on it.

###### Using NPM Packages

- When considering implementation, we should consider using NPM packages like graphlib, graphology, or lodash for graph manipulation. These packages can help accelerate development and reduce errors, especially in large or standard projects.

If our requirements are highly specific, we may need to customize the functionality. In such cases, writing our own logic may be necessary to tailor it precisely to our particular needs.

- I would prefer to use an NPM library since they have several tools which can speed up the work, but this would depend on what you want to do.
