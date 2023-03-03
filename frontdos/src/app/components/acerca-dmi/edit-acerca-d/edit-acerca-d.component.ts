import { ImageService } from './../../../service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-acerca-d',
  templateUrl: './edit-acerca-d.component.html',
  styleUrls: ['./edit-acerca-d.component.css']
})
export class EditAcercaDComponent implements OnInit {
  persona: persona = null

constructor(private activatedRouter: ActivatedRoute,
  private personaService: PersonaService,
  private router: Router,
  public imageService: ImageService) {}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaService.detail(id).subscribe(
    data =>{
      this.persona = data;
    }, err =>{
       alert("Error al modificar");
       this.router.navigate(['']);
    }
  )
}
onUpdate():void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaService.update(id, this.persona).subscribe(
    data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar la educacion");
      this.router.navigate(['']);
    }
  )
}
uploadImage($event:any){
this.imageService.uploadImage($event)
}
}
