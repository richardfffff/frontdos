import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AcercaDmiComponent } from './components/acerca-dmi/acerca-dmi.component';
import { ArgprogComponent } from './components/argprog/argprog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HSComponent } from './components/h-s/h-s.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SocialRedesComponent } from './components/social-redes/social-redes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto/editproyecto.component';
import { NewskillComponent } from './components/h-s/newskill/newskill.component';
import { EditskillComponent } from './components/h-s/editskill/editskill.component';
import { EditAcercaDComponent } from './components/acerca-dmi/edit-acerca-d/edit-acerca-d.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    AcercaDmiComponent,
    ArgprogComponent,
    FooterComponent,
    HSComponent,
    ProyectosComponent,
    SocialRedesComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    NewskillComponent,
    EditskillComponent,
    EditAcercaDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
