
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
    this.info.push({modo, estado});
  }

  public getInfo(modo:string): void {
    const result = this.info.find(i => i.modo === modo);
    if (result) {
      console.log(result.estado);
    }
  }
}

const conf1 = Configuracion.getInstance();
const conf2 = Configuracion.getInstance();

conf1.setModo("modo", "produccion");
conf2.getInfo("modo");


type Tipo = "Notebook" | "Desktop" | "Servidor";

interface IEquipo {
  tipo: string;
  nombre: string;
  ram: string;
  procesador: string;
  detalles(): string;
}

class Notebook implements IEquipo {
  constructor(
    public tipo: string,
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}
  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop implements IEquipo {
  constructor(
    public tipo: string,
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}
  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor implements IEquipo {
  constructor(
    public tipo: string,
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}
  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(tipo: Tipo, nombre: string, ram: string, procesador: string): IEquipo {
    if (tipo === "Notebook") {
      return new Notebook(tipo, nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(tipo, nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(tipo, nombre, ram, procesador);
    } else {
      throw new Error("No se permite ese equipo");
    }
  }
}

const factory = new EquipoFactory();
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());


