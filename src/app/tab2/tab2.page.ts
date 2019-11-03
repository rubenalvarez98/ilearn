import { Component, ViewChild } from '@angular/core';
import { Question } from '../interfaces/interfaces';
import { AlertsService } from '../services/alerts.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  questions = [
    {
      question: {
        text: `¿Que es es la informática?`,
        correct: 2
      },

      options: [
        {
          id: 1,
          option: `Ciencia que estudia la estructura y forma de las diferentes
          partes del cuerpo de los seres vivos`,
          color: ''
        },
        {
          id: 2,
          option: `Conjunto de conocimientos técnicos que se ocupan del tratamiento
          automático de la información por medio de computadoras`,
          color: ''
        },
        {
          id: 3,
          option: `Ciencia que estudia la composición y las propiedades de la
          materia`,
          color: ''
        }
      ]
    },
    {
      question: {
        text: `¿Qué es un ordenador?`,
        correct: 1
      },

      options: [
        {
          id: 1,
          option: `Máquina electrónica capaz de almacenar información y
           tratarla automáticamente mediante operaciones matemáticas y
            lógicas controladas por programas informáticos`,
          color: ''
        },
        {
          id: 2,
          option: `lugar de habitación permanente`,
          color: ''
        },
        {
          id: 3,
          option: `persona encargada de administrar documentos dentro de una oficina.3`,
          color: ''
        }
      ]
    },
    {
      question: {
        text: `¿Qué es un software?`,
        correct: 1
      },

      options: [
        {
          id: 1,
          option: `Es la parte lógica de un ordenador`,
          color: ''
        },
        {
          id: 2,
          option: `Es la parte física de un ordenador`,
          color: ''
        },
        {
          id: 3,
          option: `Es la pantalla que muestra la interfaz del ordenador`,
          color: ''
        }
      ]
    },
    {
      question: {
        text: `¿Qué es el hardware?`,
        correct: 2
      },

      options: [
        {
          id: 1,
          option: `Es la parte lógica de un ordenador`,
          color: ''
        },
        {
          id: 2,
          option: `Es la parte física de un ordenador`,
          color: ''
        },
        {
          id: 3,
          option: `Es la pantalla que muestra la interfaz del ordenador`,
          color: ''
        }
      ]
    },
    {
      question: {
        text: `¿Qué es un sistema operativo?`,
        correct: 1
      },

      options: [
        {
          id: 1,
          option: `Conjunto de de órdenes y programas que controlan los procesos básicos
          de una computadora y permiten el funcionamiento de otros programas`,
          color: ''
        },
        {
          id: 2,
          option: `Conjunto de partes que físicas que forman un ordenador`,
          color: ''
        },
        {
          id: 3,
          option: `Es una red social para médicos`,
          color: ''
        }
      ]
    }
  ];

  currentQuestion: any = [];

  contesto = false;

  totalQuestions: number;
  totalAnswer = 0;
  next = 0;
  totalCorrects = 0;

  audioCorrect = new Audio();

  constructor(
    private alertsService: AlertsService,
    private vibration: Vibration,
    private navCtrl: NavController
  ) {
    this.currentQuestion[0] = this.questions[0];

    this.totalQuestions = this.questions.length;

    this.audioCorrect.src = '../assets/audio/correcto.mp3';
  }

  /* verifica la selección del usuario si es correcta */
  async check(idOptPress: number) {
    const correctQuestion = this.currentQuestion[0].question.correct;

    this.cambiarOptSelect(idOptPress, correctQuestion);

    this.contesto = true;
    /*  question: {
        text: `¿Qué es un sistema operativo?`,
        correct: 1
      }, */

    if (idOptPress === correctQuestion) {
      await this.alertsService.toastAlert('Es correcto ', 'success');
      this.totalCorrects++;
      this.audioCorrect.play();
    } else {
      await this.alertsService.toastAlert('Es incorrecta', 'danger');
      this.vibration.vibrate(2000);
    }

    if (this.totalAnswer < 4) {
      this.totalAnswer++;

      setTimeout(() => {
        this.nextQuestion();
      }, 2000);
    } else {
      console.log(this.totalCorrects);
      this.navCtrl.navigateRoot(`/end-game/${this.totalCorrects}`, {
        animated: true
      });
      this.contesto = false;
      this.currentQuestion = [];
      this.totalAnswer = 0;
    }
  }

  nextQuestion() {
    this.contesto = false;
    this.next++;
    if (this.next < 5) {
      this.currentQuestion[0] = this.questions[this.next];
    }
  }

  /* cambiar el color de texto de la opción que eligio  verde será la respuesta correcta roja la incorrecta */
  cambiarOptSelect(select: number, correct: number) {
    this.currentQuestion[0].options.forEach(e => {
      if (e.id === select && e.id !== correct) {
        e.color = 'danger';
      }
      if (e.id === correct) {
        e.color = 'success';
      }
    });
  }
}
