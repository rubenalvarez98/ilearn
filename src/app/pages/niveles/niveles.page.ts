import { Component, OnInit } from '@angular/core';
import { Nivel } from '../../interfaces/interfaces';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss']
})
export class NivelesPage implements OnInit {
  estadosNiveles: boolean;
  nivelEstado = [
    {
      id: 1,
      estado: 'desbloqueado'
    },
    {
      id: 2,
      estado: 'bloqueado'
    }
  ];
  niveles: Nivel[] = [
    { id: 1, name: 'Nivel 1' },
    { id: 2, name: 'Nivel 2' },
    { id: 3, name: 'Nivel 3' },
    { id: 4, name: 'Nivel 4' },
    { id: 5, name: 'Nivel 5' }
  ];
  constructor(private storage: Storage) {
    this.getEstadosNiveles();
  }

  ngOnInit() {
    this.storage.set('estadosNiveles', this.nivelEstado);
    console.log(this.nivelEstado.find(valor => valor.id === 1));
  }

  async getEstadosNiveles() {
    this.estadosNiveles = (await this.storage.get('estadosNiveles')) || null;
    console.log(this.estadosNiveles);
  }
}
