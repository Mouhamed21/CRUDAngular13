import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherElevesComponent } from './afficherEleves/afficherEleves.component';
import { ClasseComponent } from './classe/classe.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'afficherEleves', pathMatch: 'full'},
  { path: '', component: ClasseComponent },
  { path: 'afficherEleves', component: AfficherElevesComponent, }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
