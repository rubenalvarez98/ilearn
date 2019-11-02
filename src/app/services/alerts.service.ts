import { Injectable } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  async toastAlert(message: string, color) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1000,
      position: 'top',
      translucent: true,
      color
    });
    toast.present();
  }
  async alertInformative(message: string) {
    const alert = await this.alertCtrl.create({
      message,

      cssClass: 'alert'
    });
    await alert.present();
  }
}
