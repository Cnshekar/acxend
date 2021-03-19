import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CSVComponent } from './csv/csv.component';

const routes: Routes = [{
  path: 'csv',
  pathMatch: 'full',
  component: CSVComponent
},
{
  path: '',
  component: CSVComponent
},
{
  path: '**',
  component: CSVComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  // routes: Routes = [
  //   {
  //     path: 'csv',
  //     pathMatch: 'full',
  //     component: CSVComponent
  //   },
  //   {
  //     path: '',
  //     component: CSVComponent
  //   },
  //   {
  //     path: '**',
  //     component: CSVComponent
  //   }
  // ];

}
