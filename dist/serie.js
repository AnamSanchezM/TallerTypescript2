// series.ts
// Definición de la clase Serie
export class Serie {
    // Constructor para inicializar los atributos
    constructor(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
