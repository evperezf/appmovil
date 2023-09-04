export class UserModel {
    constructor(
      public nombre: string,
      public apPaterno: string,
      public apMaterno: string,
      public rut: string,
      public email: string,
      public birthday: Date | undefined,
      public carrera: string,
      public asignatura: string,
      public seccion: string,
      public jornadaDeEstudios: string,
      public username: string,
      public password: string,
      public tipoUsuario: string
    ) {}
  
    //Metodo dentro de la clase para crear usuario. EJEMPLO solamente.
    static crearUsuario(event: {
      nombre: string;
      apPaterno: string;
      apMaterno: string;
      rut: string;
      email: string;
      birthday: Date | undefined;
      carrera: string;
      asignatura: string,
      seccion: string,
      jornadaDeEstudios: string;
      username: string;
      password: string;
      tipoUsuario: string;
    }) {
      return {
          nombre: event.nombre,
          apPaterno: event.apPaterno,
          apMaterno: event.apMaterno,
          rut: event.rut,
          email: event.email,
          birthday: event.birthday,
          carrera: event.carrera,
          asignatura: event.asignatura,
          seccion: event.seccion,
          jornadaDeEstudios: event.jornadaDeEstudios,
          username: event.username,
          password: event.password,
          tipoUsuario: event.tipoUsuario
      };
    }
  }
  