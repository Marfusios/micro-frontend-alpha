import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { AssetsExampleComponent } from './assets-example/assets-example.component';
import { StylesExampleComponent } from './styles-example/styles-example.component';
import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';

@NgModule({
  declarations: [
    EntryComponent,
    AssetsExampleComponent,
    StylesExampleComponent,
    ButtonsExampleComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
