import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton,IonCard } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../fig';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonInput, IonButton, FormsModule, IonCard]
})
export class TrianguloComponent  implements OnInit {

  ladoA: string = "";
  ladoB: string = "";
  ladoC: string = "";
  resultado: string = "";
 
  constructor() { }

  ngOnInit(): void {}

  calcularP() {
    const a = parseFloat(this.ladoA);
    const b = parseFloat(this.ladoB);
    const c = parseFloat(this.ladoC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      this.resultado = "Por favor, ingresa valores numéricos para los lados del triángulo.";
      return;
    }

    const figuraGeometrica = new TrianguloEscaleno('Triangulo Escaleno', a, b, c);
    const perimetro = figuraGeometrica.calcularPerimetro();
    this.resultado = `El perímetro es: ${perimetro} cm`;
  }
}
