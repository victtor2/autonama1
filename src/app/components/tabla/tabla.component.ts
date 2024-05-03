import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  
  juegos=[
    {
      id: "j01",
    nombre: "MarioKart",
    precio: "50",
    url: "https://imagenes.elpais.com/resizer/v2/K4QAJD5DN5DU5OMLUKOTGT736A.jpg?auth=b5dd4407fa9e119c77c3c87a6f01dfd2811977473b71bc03f76ada2ac211eea7&width=414"
  },
  {
    id: "j02",
  nombre: "MarioKartDelux",
  precio: "60",
  url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_MarioKartDS_image1600w.jpg"
  },
  {
    id: "j03",
  nombre: "MarioKartDelux",
  precio: "70",
  url:"https://i.ytimg.com/vi/vChBnhTPjRI/maxresdefault.jpg"
  },
  {
    id: "j04",
  nombre: "MarioKart64",
  precio: "80",
  url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/H2x1_N64_MarioKart64.jpg"
  },
  {
    id: "j05",
  nombre: "MarioKartDelux8",
  precio: "90",
  url: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ncom/software/switch/70070000013723/68c93679136e00595184c8abc6fef8deb7e50abc33a83912b6b51b6d033243bf"
  }  
  ]


  visualizar: any
  ver(id: any){
    this.visualizar = id
  }

  idJuego = '';
  
  juegoEncontrado: any
  buscarJuegoPorId(id: string) {
    this.juegoEncontrado = this.juegos.find(juego => juego.id === id);
  }

  precioMinimo: number=0;
  precioMaximo: number=0;

  juegosFiltrados: any;
  filtrarJuegos(): void {
    this.juegosFiltrados = this.juegos.filter(juego =>
      +juego.precio >= this.precioMinimo && +juego.precio <= this.precioMaximo
    );
  }

}
