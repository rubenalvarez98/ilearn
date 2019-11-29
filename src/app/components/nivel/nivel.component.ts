import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../../interfaces/interfaces';
import { AlertsService } from '../../services/alerts.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {
  @Input() preguntas: Pregunta[];

  preguntaActual: Pregunta[] = [];

  contesto = false;

  totalQuestions: number;
  totalPreguntas = 0;
  next = 0;
  totalCorrects = 0;

  audioCorrect = new Audio();

  postions: Array<number> = [];

  constructor(
    private alertsService: AlertsService,
    private vibration: Vibration,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.nextQuestion();

    this.totalQuestions = this.preguntas.length;

    this.audioCorrect.src = '../assets/audio/correcto.mp3';
  }

  /* verifica la selección del usuario si es correcta */
  async check(idOptPress: number) {
    const correctQuestion = this.preguntaActual[0].correcta;

    this.cambiarOptSelect(idOptPress, correctQuestion);

    this.contesto = true;

    if (idOptPress === correctQuestion) {
      await this.alertsService.toastAlert('Es correcto ', 'success');

      this.totalCorrects++;
      this.audioCorrect.play();
    } else {
      await this.alertsService.toastAlert('Es incorrecta', 'danger');
      this.vibration.vibrate(2000);
    }

    if (this.totalPreguntas < 4) {
      this.totalPreguntas++;

      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    } else {
      this.navCtrl.navigateRoot(`/end-game/${this.totalCorrects}`, {
        animated: true
      });

      this.contesto = false;
      this.preguntaActual = [];
      this.totalPreguntas = 0;
    }
  }

  nextQuestion() {
    this.contesto = false;
    this.next++;

    if (this.next <= 5) {
      const position = this.randomPosition();

      this.preguntaActual[0] = this.preguntas[position];
      this.postions.push(position);
    }
  }

  /** cambiar el color de texto de la opción que eligio
   *  verde será la respuesta correcta roja la incorrecta
   */
  cambiarOptSelect(select: number, correct: number) {
    this.preguntaActual[0].opciones.forEach((e) => {
      if (e.id === select && e.id !== correct) {
        e.color = 'danger';
      }
      if (e.id === correct) {
        e.color = 'success';
      }
    });
  }

  randomPosition() {
    let position = 0;
    let valid = true;

    do {
      position = this.randomNumber();

      if (!this.repeatPosition(position)) {
        valid = false;
      }
    } while (valid);

    return position;
  }

  randomNumber(): number {
    return Math.floor(Math.random() * this.preguntas.length);
  }

  /**
   * @param position posición a buscar, si la encuentra retorna true si no false
   */
  repeatPosition(position: number) {
    return this.postions.includes(position);
  }
}
