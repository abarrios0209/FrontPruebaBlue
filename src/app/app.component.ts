import { Component, ViewEncapsulation } from '@angular/core';
import { Personaje } from './models/Personaje';
import { PersonajeServiceService } from './services/personaje-service.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RespuestaGenericaDto } from './models/RespuestaGenericaDto';
import { ConstantesApp } from './constantes/constantes';

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
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  personaje: Personaje | null | undefined;
  opcionSeleccionada: string = '';
  cargando: boolean = false;

  opciones = [
    { value: ConstantesApp.selectLikes, label: ConstantesApp.personajeConMasLikes },
    { value: ConstantesApp.selectDisLikes, label: ConstantesApp.personajeConMasDisLikes },
    { value: ConstantesApp.selectPikachu, label: ConstantesApp.estadoPikachu }
  ];

  constructor(
    private personajeService: PersonajeServiceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cargarPersonajeAleatorio();
  }

  cargarPersonajeAleatorio() {
    this.cargando = true;
    this.personajeService.obtenerUnPersonajeRandom().subscribe({
      next: (personaje: RespuestaGenericaDto<Personaje>) => {
        this.personaje = personaje.data
        this.cargando = false;
      },
      error: (error) => {
        this.cargando = false;
        this.pintarSnackBar(ConstantesApp.errorPersonajeAleatorio);
        console.error(ConstantesApp.errorPersonajeAleatorio, error);
      }
    });
  }

  obtenerPersonajeMasLikes() {
    this.cargando = true;
    this.personajeService.obtenerPersonajeConMasLikes().subscribe({
      next: (personaje: RespuestaGenericaDto<Personaje>) => {
        this.personaje = personaje.data;
        this.cargando = false;
      },
      error: (error) => {
        this.cargando = false;
        this.pintarSnackBar(ConstantesApp.errorPersonajeMasLikes);
        console.error(ConstantesApp.errorPersonajeMasLikes, error);
      }
    });
  }

  obtenerPersonajeMasDislikes() {
    this.cargando = true;
    this.personajeService.obtenerPersonajeConMasDisLikes().subscribe({
      next: (personaje: RespuestaGenericaDto<Personaje>) => {
        this.personaje = personaje.data;
        this.cargando = false;
      },
      error: (error) => {
        this.cargando = false;
        this.pintarSnackBar(ConstantesApp.errorPersonajeMasDisLikes);
        console.error(ConstantesApp.errorPersonajeMasDisLikes, error);
      }
    });
  }

  obtenerEstadoPikachu() {
    this.cargando = true;

    this.personajeService.obtenerEstadoDelPikachu().subscribe({
      next: (personaje: RespuestaGenericaDto<Personaje>) => {
        this.personaje = personaje.data;
        this.cargando = false;
      },
      error: (error) => {
        this.cargando = false;
        this.pintarSnackBar(ConstantesApp.errorEstadoPikachu);
        console.error(ConstantesApp.errorEstadoPikachu, error);
      }
    });
  }

  onSelectChange(): void {
    if (this.opcionSeleccionada === ConstantesApp.selectLikes) {
      this.obtenerPersonajeMasLikes();
    } else if (this.opcionSeleccionada === ConstantesApp.selectDisLikes) {
      this.obtenerPersonajeMasDislikes();
    } else if (this.opcionSeleccionada === ConstantesApp.selectPikachu) {
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
      this.personajeService.darLike(body).subscribe({
        next: () => {
          this.pintarSnackBar(ConstantesApp.likeInsertado);
          this.opcionSeleccionada = '';
          this.personaje = null;
          setTimeout(() => this.cargarPersonajeAleatorio(), 500);
        },
        error: (error) => {
          this.cargando = false;
          this.pintarSnackBar(ConstantesApp.errorAlDarLike);
          console.error(ConstantesApp.errorAlDarLike, error);
        }
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
      this.personajeService.darDisLike(body).subscribe({
        next: () => {
          this.pintarSnackBar(ConstantesApp.dislikeInsertado);
          this.opcionSeleccionada = '';
          this.personaje = null;
          setTimeout(() => this.cargarPersonajeAleatorio(), 500);
        },
        error : (error) => {
          this.cargando = false;
        this.pintarSnackBar(ConstantesApp.errorAlDarDisLike);
        console.error(ConstantesApp.errorAlDarDisLike, error);
        }
      });
    }
  }

  pintarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
