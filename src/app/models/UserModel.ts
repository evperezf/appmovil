export class UserModel {
    constructor(
      public numrun: number, // Debe coincidir con el tipo de dato en Supabase (int8)
      public dv: string,
      public pnombre: string,
      public snombre: string,
      public apaterno: string,
      public apmaterno: string,
      public email: string,
      public usuario: string,
      public contrasenha: string,
      public tipo_usuario: string,
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
      tipoUsuario: boolean;
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
  