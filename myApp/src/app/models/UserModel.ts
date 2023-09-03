export class UserModel {

    constructor(
        public name: string,
        public last_name: string,
        public email: string,
        public birthday: Date | undefined,
        public type: string,
        public username: string,
        public password: string,
        public rut:string,
        public asignatura: string,
        public seccion: string, 
    ) {
    }

    //Metodo dentro de la clase para crear usuario. EJEMPLO solamente.
    static crearUsuario(event: {
        name: string,
        last_name: string,
        email: string,
        birthday: Date | undefined,
        type: string,
        username: string,
        password: string,
        rut:string,
        asignatura: string,
        seccion: string, 
    }){
        return {
            name: event.name,
            last_name: event.last_name,
            email: event.email,            
            birthday: event.birthday,
            type: event.type,
            username: event.username,
            password:event.password,
            rut:event.rut,
            asignatura: event.asignatura,
            seccion: event.seccion
        }
    }
}