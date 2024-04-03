import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './components/first/first.component';
import { TooltipDirective } from '../../shared/directives/tooltip.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    TooltipDirective,
    FormsModule
  ]
})
export class FirstModule { }
