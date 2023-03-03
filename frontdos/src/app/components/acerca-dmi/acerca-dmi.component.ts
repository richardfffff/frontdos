import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-dmi',
  templateUrl: './acerca-dmi.component.html',
  styleUrls: ['./acerca-dmi.component.css']
})
export class AcercaDmiComponent implements OnInit {

  persona: persona = null;

  constructor(public personaService: PersonaService,
    private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void {
this.cargarPersona();
if(this.tokenService.getToken()){
  this.isLogged = true;
} else {
  this.isLogged = false;
}
  }
  
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
{this.persona = data}
      )
  }
}
