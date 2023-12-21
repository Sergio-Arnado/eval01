import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../fig';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonInput, IonButton, FormsModule, IonCard ]
})
export class CirculoComponent implements OnInit {
  calcular: string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  calcularP() {
    const radio = parseInt(this.calcular);
    const figuraGeometrica = new Circulo('circulo', radio);
    const perimetro = Math.round(figuraGeometrica.calcularPerimetro()* 100) / 100;
    this.resultado = `El perimetro es: ${perimetro} cm`;
  }
}