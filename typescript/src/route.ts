import { Request, Response} from 'express';
import createUser from './services/CreateUser';


export function helloWorld(request: Request, response: Response) {

    const user = createUser({
        name: 'Everton Carvalho',
        email: 'toncarvalhosk@gmail.com',
        password: '123456789'

    });

    return response.json({message: 'Hello World'});

};


