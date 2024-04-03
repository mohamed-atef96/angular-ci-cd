import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:"",loadChildren:(()=>import('./modules/first/first.module').then(m=>m.FirstModule))
}];
