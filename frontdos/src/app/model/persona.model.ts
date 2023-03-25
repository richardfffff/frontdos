export class persona{
  id?: number;
  nombre: string;
  apellido: string;
  resumen: string;
  descripcion: string;
  img: string;

  constructor(nombre: string, apellido: string, resumen: string, descripcion: string, img: string ){
      this.nombre = nombre;
      this.apellido = apellido;
      this.resumen = resumen;
      this.descripcion = descripcion;
      this.img = img;
  }
}
