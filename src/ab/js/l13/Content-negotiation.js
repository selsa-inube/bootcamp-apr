fetch("https://eloquentjavascript.net/author", {
  headers: {
    Accept: "application/rainbows+unicorns",
  },
})
  .then((response) => {
    console.log("Código de estado:", response.status);
    return response.text();
  })
  .then((data) => {
    console.log("Contenido para application/rainbows+unicorns:", data);
  })
  .catch((error) => console.error("Error:", error));
