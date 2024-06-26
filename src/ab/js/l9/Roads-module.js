import { buildGraph } from "./graph.js";

const carreteras = [
  "Casa de Alice-Casa de Bob",
  "Casa-Cabaña de Alice",
  "Casa de Alice-Oficina de correos",
  "Casa de Bob-Ayuntamiento",
  "Casa de Daria-Casa de Ernie",
  "Casa-Ayuntamiento de Daria",
  "Casa-Ayuntamiento de Ernie-Casa de Grete",
  "Casa-Granja de Grete",
  "Casa-Tienda de Grete",
  "Mercado-Granja",
  "Mercado-Oficina de Correos",
  "Mercado-Tienda",
  "Mercado-Ayuntamiento",
  "Tienda-Ayuntamiento",
];

const roadGraph = buildGraph(carreteras);

export { roadGraph };
