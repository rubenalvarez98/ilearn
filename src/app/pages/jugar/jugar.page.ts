import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Niveles } from '../../interfaces/interfaces';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss']
})
export class JugarPage implements OnInit {
  tipoNivel: number;
  niveles: Niveles[] = [
    {
      nivel: 1,
      preguntas: [
        {
          titulo: `¿Que es es la informática?`,
          correcta: 2,
          opciones: [
            {
              id: 1,
              titulo: `Ciencia que estudia la estructura y forma de las diferentes
              partes del cuerpo de los seres vivos`,
              color: ''
            },
            {
              id: 2,
              titulo: `Conjunto de conocimientos técnicos que se ocupan del tratamiento
              automático de la información por medio de computadoras`,
              color: ''
            },
            {
              id: 3,
              titulo: `Ciencia que estudia la composición y las propiedades de la
              materia`,
              color: ''
            }
          ]
        },
        {
          titulo: `¿Qué es un ordenador?`,
          correcta: 1,
          opciones: [
            {
              id: 1,
              titulo: `Máquina electrónica capaz de almacenar información y
               tratarla automáticamente mediante operaciones matemáticas y
                lógicas controladas por programas informáticos`,
              color: ''
            },
            {
              id: 2,
              titulo: `lugar de habitación permanente`,
              color: ''
            },
            {
              id: 3,
              titulo: `persona encargada de administrar documentos dentro de una oficina.3`,
              color: ''
            }
          ]
        },
        {
          titulo: `¿Qué es un software?`,
          correcta: 1,
          opciones: [
            {
              id: 1,
              titulo: `Es la parte lógica de un ordenador`,
              color: ''
            },
            {
              id: 2,
              titulo: `Es la parte física de un ordenador`,
              color: ''
            },
            {
              id: 3,
              titulo: `Es la pantalla que muestra la interfaz del ordenador`,
              color: ''
            }
          ]
        },
        {
          titulo: `¿Qué es el hardware?`,
          correcta: 2,
          opciones: [
            {
              id: 1,
              titulo: `Es la parte lógica de un ordenador`,
              color: ''
            },
            {
              id: 2,
              titulo: `Es la parte física de un ordenador`,
              color: ''
            },
            {
              id: 3,
              titulo: `Es la pantalla que muestra la interfaz del ordenador`,
              color: ''
            }
          ]
        },
        {
          titulo: `¿Qué es un sistema operativo?`,
          correcta: 1,
          opciones: [
            {
              id: 1,
              titulo: `Conjunto de de órdenes y programas que controlan los procesos básicos
            de una computadora y permiten el funcionamiento de otros programas`,
              color: ''
            },
            {
              id: 2,
              titulo: `Conjunto de partes que físicas que forman un ordenador`,
              color: ''
            },
            {
              id: 3,
              titulo: `Es una red social para médicos`,
              color: ''
            }
          ]
        }
      ]
    },
    {
      nivel: 2,
      preguntas: []
    },
    {
      nivel: 3,
      preguntas: []
    },
    {
      nivel: 4,
      preguntas: []
    },
    {
      nivel: 5,
      preguntas: []
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');

    this.tipoNivel = Number.parseInt(id, 10) - 1; // pasa el id a número ya que esta en string
  }

  ngOnInit() {}
}
