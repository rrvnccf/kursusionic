import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CakePage } from './cake.page';

const routes: Routes = [
  {
    path: '',
    component: CakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CakePageRoutingModule {}
