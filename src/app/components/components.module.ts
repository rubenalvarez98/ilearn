import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NivelComponent } from './nivel/nivel.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NivelComponent],
  exports: [NivelComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule {}
