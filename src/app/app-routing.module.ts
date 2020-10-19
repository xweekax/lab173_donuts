import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DonutsComponent} from './donuts/donuts.component';
import {DonutDetailComponent} from './donut-detail/donut-detail.component';
import { DonutService } from './donut.service';


const routes: Routes = [
  {path: "Donuts", component: DonutsComponent},
  {path: "DonutDetail", component: DonutDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
