import { series } from './data.js'; // Asegúrate que la ruta sea correcta
const tableBody = document.getElementById('series-table');
const seriesImage = document.getElementById('series-image');
const seriesTitle = document.getElementById('series-title');
const seriesDescription = document.getElementById('series-description');
const seriesLink = document.getElementById('series-link');
const seriesDetailCard = document.getElementById('series-detail-card');
console.log('Series importadas:', series); // Esto imprime las series en la consola
function renderSeries() {
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="series-name" data-id="${serie.id}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        // Asignamos un evento 'click' para cada serie
        row.querySelector('.series-name').addEventListener('click', () => showSeriesDetail(serie));
        tableBody.appendChild(row);
    });
}
function showSeriesDetail(serie) {
    seriesImage.src = serie.image;
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.link;
    seriesDetailCard.style.display = 'block'; // Mostrar la tarjeta
}
function calculateSeasonAverage() {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return Math.floor(totalSeasons / series.length); // Redondear hacia abajo para obtener un entero
}
function renderSeasonAverage() {
    const averageSeasons = calculateSeasonAverage();
    const row = document.createElement('tr');
    row.innerHTML = `
    <td colspan="3">Season average</td>
    <td>${averageSeasons}</td>
  `;
    tableBody.appendChild(row);
}
renderSeries(); // Renderizar las series primero
renderSeasonAverage(); // Luego renderizar el promedio de temporadas
