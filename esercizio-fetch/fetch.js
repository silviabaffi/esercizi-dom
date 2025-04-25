// Lo scopo di questo task è di mostrare nella pagina una carta de "Il signore degli anelli" con:

// Nome del personaggio
// immagine del personaggio
// Prova a fetchare una card dal db del gioco di carte di Lord of the Rings, la documentazione dell'API la puoi trovare a questo link: https://ringsdb.com/api/doc
// Fai in modo che nella tua pagina html spuntino il nome del personaggio della carta, la sua immagine

async function fetchData() {
  try {
    const response = await fetch("https://ringsdb.com/api/public/card/01073");
    const data = await response.json();
    const urlAPI = "https://ringsdb.com"

    console.log(data)

    const nameCard = data.name;
    const image = data.imagesrc;

    const h1 = document.querySelector("h1")
    const immagine = document.querySelector("img")

    h1.innerText = nameCard;
    immagine.setAttribute("src", urlAPI + image)

  } catch (error) {
    console.error(error);
  }
}

fetchData();