import { series } from './data.js'; // Asegúrate que la ruta sea correcta
import { Serie } from './serie.js'; // Asegúrate que la ruta sea correcta

const tableBody: HTMLElement = document.getElementById('series-table')!;
const seriesImage: HTMLImageElement = document.getElementById('series-image') as HTMLImageElement;
const seriesTitle: HTMLElement = document.getElementById('series-title')!;
const seriesDescription: HTMLElement = document.getElementById('series-description')!;
const seriesLink: HTMLAnchorElement = document.getElementById('series-link') as HTMLAnchorElement;
const seriesDetailCard: HTMLElement = document.getElementById('series-detail-card')!;

console.log('Series importadas:', series); // Esto imprime las series en la consola

function renderSeries(): void {
  series.forEach((serie: Serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="series-name" data-id="${serie.id}">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    // Asignamos un evento 'click' para cada serie
    row.querySelector('.series-name')!.addEventListener('click', () => showSeriesDetail(serie));
    tableBody.appendChild(row);
  });
}


function showSeriesDetail(serie: Serie): void {
  seriesImage.src = serie.image;
  seriesTitle.textContent = serie.name;
  seriesDescription.textContent = serie.description;
  seriesLink.href = serie.link;
  seriesDetailCard.style.display = 'block'; // Mostrar la tarjeta
}


function calculateSeasonAverage(): number {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  return Math.floor(totalSeasons / series.length); // Redondear hacia abajo para obtener un entero
}

function 
renderSeasonAverage(): void {
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