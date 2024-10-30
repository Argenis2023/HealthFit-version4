import { Component, OnInit } from '@angular/core';
import { ClimaService, Clima } from '../service/clima.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  clima!: Clima; 
  nombreCiudad: string = 'Santiago'; 

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    const climaGuardado = localStorage.getItem('clima');
    if (climaGuardado) {
      console.log('Clima cargado desde el localStorage');
      this.clima = JSON.parse(climaGuardado);
    } else {
      this.climaService.obtenerClima(this.nombreCiudad).subscribe((data: Clima) => {
          this.clima = data;
          console.log('Clima obtenido desde la API');
          localStorage.setItem('clima', JSON.stringify(this.clima));
        },
        (error: any) => {
          console.error('Error obteniendo datos del clima', error);
        }
      );
    }
  }
}


