import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidePasswordPageRoutingModule } from './olvide-password-routing.module';

import { OlvidePasswordPage } from './olvide-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidePasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [OlvidePasswordPage]
})
export class OlvidePasswordPageModule {}
