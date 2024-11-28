import { Component } from '@angular/core';
import { Personaje } from './models/Personaje';
import { PersonajeServiceService } from './services/personaje-service.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {

  personaje: Personaje | null | undefined;
  personajeMasLikes: Personaje | null | undefined;
  personajeMasDislikes: Personaje | null | undefined;
  estadoPikachu: Personaje | null | undefined;
  opcionSeleccionada: string = '';

  opciones = [
    { value: 'likes', label: 'Personaje con más Likes' },
    { value: 'dislikes', label: 'Personaje con más Dislikes' },
    { value: 'pikachu', label: 'Estado de Pikachu' }
  ];

  constructor(
    private personajeService: PersonajeServiceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cargarPersonajeAleatorio();
  }

  cargarPersonajeAleatorio() {
    this.personajeService.obtenerUnPersonajeRandom().subscribe((personaje: any) => {
      this.personaje = personaje.data
    });
  }

  obtenerPersonajeMasLikes() {
    this.personajeService.obtenerPersonajeConMasLikes().subscribe((personaje: any) => {
      this.personaje = personaje.data;
    });
  }

  obtenerPersonajeMasDislikes() {
    this.personajeService.obtenerPersonajeConMasDisLikes().subscribe((personaje: any) => {
      this.personaje = personaje.data;
    });
  }

  obtenerEstadoPikachu() {
    this.personajeService.obtenerEstadoDelPikachu().subscribe((personaje: any) => {
      this.personaje = personaje.data;
    });
  }

  onSelectChange(): void {
    if (this.opcionSeleccionada === 'likes') {
      this.obtenerPersonajeMasLikes();
    } else if (this.opcionSeleccionada === 'dislikes') {
      this.obtenerPersonajeMasDislikes();
    } else if (this.opcionSeleccionada === 'pikachu') {
      this.obtenerEstadoPikachu();
    }
  }

  darLike(): void {
    if (this.personaje) {
      let body = {
        id: this.personaje.id,
        name: this.personaje.name,
        image: this.personaje.image,
        likes: this.personaje.likes,
        dislikes: this.personaje.dislikes
      }
      this.personajeService.darLike(body).subscribe(() => {
        this.snackBar.open('Like insertado exitosamente', 'Cerrar',{
          duration:2000,
          horizontalPosition:'center',
          verticalPosition:'bottom',
          panelClass: ['snack-bar-success']
        })
        this.opcionSeleccionada = '';
        this.personaje = null;
        setTimeout(() => this.cargarPersonajeAleatorio(), 500);
      });
    }
  }

  darDislike(): void {
    if (this.personaje) {
      let body = {
        id: this.personaje.id,
        name: this.personaje.name,
        image: this.personaje.image,
        likes: this.personaje.likes,
        dislikes: this.personaje.dislikes
      }
      this.personajeService.darDisLike(body).subscribe(() => {
        this.snackBar.open('Dislike insertado exitosamente', 'Cerrar',{
          duration:2000,
          horizontalPosition:'center',
          verticalPosition:'bottom',
          panelClass: ['snack-bar-error']
        })
        this.opcionSeleccionada = '';
        this.personaje = null;
        setTimeout(() => this.cargarPersonajeAleatorio(), 500);
      });
    }
  }

}
