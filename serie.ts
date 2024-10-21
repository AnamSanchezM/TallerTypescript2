// series.ts

// Definición de la clase Serie
export class Serie {
    // Definición de los atributos
    public id: number;
    public name: string;
    public channel: string;
    public seasons: number;
    public description: string;
    public link: string;
    public image: string;
  
    // Constructor para inicializar los atributos
    constructor(
      id: number,
      name: string,
      channel: string,
      seasons: number,
      description: string,
      link: string,
      image: string
    ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.image = image;
    }
  }
  
  