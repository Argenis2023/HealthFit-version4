import { Component, OnInit } from '@angular/core';
import { ClimaService, Clima } from '../service/clima.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  clima!: Clima;

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    this.obtenerUbicacion(); // Llama al método para obtener la ubicación.
  }

  async obtenerUbicacion(): Promise<void> {
    try {
      // Solicita la ubicación actual del dispositivo
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude; // Obtiene la latitud
      const lon = position.coords.longitude; // Obtiene la longitud
      this.obtenerClima(lat, lon); // Llama al método para obtener el clima con las coordenadas
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  obtenerClima(lat: number, lon: number): void {
    // Llama al servicio para obtener los datos del clima
    this.climaService.obtenerClimaPorCoordenadas(lat, lon).subscribe(
      (data: Clima) => {
        this.clima = data; // Almacena los datos del clima en la propiedad `clima`
        console.log('Clima obtenido:', data);
      },
      (error) => {
        console.error('Error al obtener datos del clima', error);
      }
    );
  }
}
