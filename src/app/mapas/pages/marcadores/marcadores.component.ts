import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from "mapbox-gl";

interface MarcadorColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 14;
  center: [number, number] = [-74.19496522352912, 4.625526607040665];

  // Arreglo de marcadores
  marcadores: MarcadorColor[] = [];
  
  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.leerLocalStorage();

    // puede usarse como marker personalizado new mapboxgl.Marker({
    //   element: markerHtml
    // })
    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola mundo';

    // const marker = new mapboxgl.Marker()
    //   .setLngLat(this.center)
    //   .addTo(this.mapa);
  }

  agregarMarcador() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);
    
      this.marcadores.push({
        color: color,
        marker: nuevoMarcador
      });
    
      this.guardarMarcadoresLocalStorage();

      nuevoMarcador.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });
  }

  irMarcador(marker: mapboxgl.Marker) {
    const { lng, lat } = marker.getLngLat();
    this.mapa.flyTo({
      center: [lng, lat],
      zoom: 16
    })
  }

  guardarMarcadoresLocalStorage() {
    const lngLatArr: MarcadorColor[] = [];
    this.marcadores.forEach(m => {
      const color = m.color;
      const { lng, lat } = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        centro: [lng, lat]
      });
    });

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
  }

  leerLocalStorage() {
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);
      
      this.marcadores.push({
        color: m.color,
        marker: newMarker
      });

      newMarker.on('dragend', () => {
        this.guardarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador(i: number) {
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i, 1);
    this.guardarMarcadoresLocalStorage();
  }
}
