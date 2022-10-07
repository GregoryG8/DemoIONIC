import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { IonicModule } from '@ionic/angular';
import { MensajesComponent } from "../mensajes/mensajes.component";
import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { HeroService } from '../hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page, MensajesComponent]
})
export class Tab4PageModule {}
