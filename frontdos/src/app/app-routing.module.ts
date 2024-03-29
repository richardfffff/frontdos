import { EditAcercaDComponent } from './components/acerca-dmi/edit-acerca-d/edit-acerca-d.component';
import { EditskillComponent } from './components/h-s/editskill/editskill.component';
import { NewskillComponent } from './components/h-s/newskill/newskill.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto/newproyecto.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id', component: EditeducacionComponent},
  {path:'nuevoproy', component: NewproyectoComponent},
  {path:'editproy/:id', component: EditproyectoComponent},
  {path:'nuevaha', component: NewskillComponent},
  {path:'editha/:id', component: EditskillComponent},
  {path:'editacercade/:id', component: EditAcercaDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
