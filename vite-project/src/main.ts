
class Configuracion {
  private static instance: Configuracion;
  public info: {modo: string, estado: string}[] = [];

  private constructor() {}

  static getInstance(): Configuracion {
    if (!this.instance) {
      this.instance = new Configuracion();
    }
    return this.instance;
  }

  public setModo(modo: string, estado: string){
      this.info.push({modo, estado})
    }
  public getInfo(modo:string):void{
    if(this.info.find(i => i.modo === modo)){
      console.log(this.info.find(i => i.modo === modo));
    }
    }
}

const conf1 =  Configuracion.getInstance();
const conf2 =  Configuracion.getInstance();
conf1.setModo("modo", "produccion");
conf2.getInfo("modo");


