import { Component } from '@angular/core';
import { CirculoComponent } from '../FigurasGeometricas/circulo/circulo.component';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { TrianguloComponent } from '../FigurasGeometricas/triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CirculoComponent, IonSelect, IonHeader, IonToolbar, IonTitle, 
            IonContent, IonSelectOption, CommonModule, TrianguloComponent],
})
export class HomePage {

tipodefigura:string = ""
  constructor() {}

  tipodefiguracirculo() { return this.tipodefigura == "circulo"}
  tipodefiguratriangulo() { return this.tipodefigura == "triangulo"}


  seleccionfigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipodefigura = $event.detail.value
  
  }
}