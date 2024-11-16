import { ChangeDetectionStrategy,Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { identity } from 'rxjs';
import { NgFor, NgIf , NgClass} from '@angular/common';
import { CommonModule } from '@angular/common'; // Import if needed
import { runInThisContext } from 'vm';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';

 
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatProgressBarModule,MatChipsModule,MatCardModule,NgFor,NgIf,CommonModule,NgClass,RouterLink,RouterModule,HeaderComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardsComponent {
  
  compra: Array<any> = [];
  product: any
  Cards : Array<any> = [
    {
      id: 0,
      titulo: 'Telefono',
      precio: 50,
      tipoEnvio: ' Rapido ',
      imagen: 'https://static.wixstatic.com/media/b6c5a2_bd32c80bd6cd434a82adc952e62d4bd8~mv2.png/v1/fit/w_500,h_500,q_90/file.png'
    },
    {
      id: 1,
      titulo: 'Carro',
      precio: 10000,
      tipoEnvio: ' Tardado ',
      imagen: 'https://media.istockphoto.com/id/1157655660/es/foto/suv-rojo-gen%C3%A9rico-sobre-un-fondo-blanco-vista-lateral.jpg?s=612x612&w=0&k=20&c=0I2xA9oCnNUfluy5m1ErkM4NwHQOkhDUr2HwKXNO1z8='
    },
    {
      id: 2,
      titulo: 'Televisor',
      precio: 300,
      tipoEnvio: ' Rapido ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVwYT1AIcqodza0iKaDj7ocn3CjHjpoH2fA&s'
    },
    {
      id: 3,
      titulo: 'Consola',
      precio: 500,
      tipoEnvio: '  Lento ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P4WxxSUa-dWuo-x7BOYLTsmBuPOK6PjztQ&s'
    },
    {
      id: 4,
      titulo: 'Audifonos',
      precio: 200,
      tipoEnvio: '  Tardado ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgq92h2eK6v9qP8Lvb76wnlfc0wJorKlweQ&s'
    },
    {
      id: 5,
      titulo: 'Laptop',
      precio: 50,
      tipoEnvio: '  Rapido ',
      imagen: 'data:image/jpeg;base64,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'
    },
    {
      id: 6,
      titulo: 'Reloj',
      precio: 70,
      tipoEnvio: '  Tardado ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAXV22U5sNJXqSM9hpy5CayXnKImjVnkG3A&s'
    },
    {
      id: 7,
      titulo: 'Juego',
      precio: 120,
      tipoEnvio: '  Tardado ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zI3yvGoq1M0nFxvfkuSWGoOs17nzyWzJ3A&s'
    },
    {
      id: 8,
      titulo: 'Tarjeta Grafica',
      precio: 80,
      tipoEnvio: ' Lento ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUIZqWNSznxnKA4XWGs0erBRRiB8QTtJYhg&s'
    },
    {
      id: 9,
      titulo: 'Balon',
      precio: 150,
      tipoEnvio: ' Rapido ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pbulxva9WRS27L2GrB0Q4cMXce63WMyFng&s'
    }

  ];
  addToCart(id: number){
    this.compra.push(id);
    console.log(this.compra);
  }
  getClass(product: any) {
     
      return 'text-warning';
    
  
  }
  constructor(){
  
  }
} 
