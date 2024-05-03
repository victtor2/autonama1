import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-juegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-juegos.component.html',
  styleUrl: './detalles-juegos.component.css'
})
export class DetallesJuegosComponent {

  ruta = inject(ActivatedRoute)

  juegos=[
    {
      id: "j01",
    nombre: "MarioKart",
    precio: "80",
    descripcion: "El juego que todos esperaba, ropio el record de ventas en todo el mundo, el preferido de los niños",
    url: "https://imagenes.elpais.com/resizer/v2/K4QAJD5DN5DU5OMLUKOTGT736A.jpg?auth=b5dd4407fa9e119c77c3c87a6f01dfd2811977473b71bc03f76ada2ac211eea7&width=414"
  },
  {
    id: "j02",
  nombre: "MarioKartDelux",
  precio: "80",
  descripcion: "El juego que todos esperaba, ropio el record de ventas en todo el mundo, el preferido de los niños",
  url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_ds_22/SI_NDS_MarioKartDS_image1600w.jpg"
  },
  {
    id: "j03",
  nombre: "MarioKartDelux",
  precio: "60",
  descripcion: "El juego que todos esperaba, ropio el record de ventas en todo el mundo, el preferido de los niños",
  url:"https://i.ytimg.com/vi/vChBnhTPjRI/maxresdefault.jpg"
  },
  {
    id: "j04",
  nombre: "MarioKart64",
  precio: "90",
  descripcion: "El juego que todos esperaba, ropio el record de ventas en todo el mundo, el preferido de los niños",
  url: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_7/H2x1_N64_MarioKart64.jpg"
  },
  {
    id: "j05",
  nombre: "MarioKartDelux8",
  precio: "100",
  descripcion: "El juego que todos esperaba, ropio el record de ventas en todo el mundo, el preferido de los niños",
  url: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ncom/software/switch/70070000013723/68c93679136e00595184c8abc6fef8deb7e50abc33a83912b6b51b6d033243bf"
  }  
  ]

  juego: any
  id:any
  ngOnInit(){
    this.ruta.params.subscribe(j=>{
      console.log(j['idJuegos']);
      this.id = j['idJuegos']

      this.juegos.forEach(element => {
        if(element.id == this.id){
          this.juego = element

        }
      });
    })
  }

}
