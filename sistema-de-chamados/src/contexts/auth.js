
import {useState, useEffect, createContext} from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [user, setUser] = useState(null) ;
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

  

    useEffect(() =>{
   
        
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage()

    }, [])

    async function signUp(email, password, nome){

        setLoadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {

            let uid = value.user.uid;

            await firebase.firestore().collection('users')
            .doc(uid).set({
                nome: nome,
                avatarUrl: null,
            })
            .then(() => {

                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null
                }

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error) => {
            console.log(error)
            setLoadingAuth(false);

        })
       
    }

    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }

    async function login(email, password){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value)=>{
            console.log(value)
          let data = {
              uid: value.user.uid
            }
          setUser(data)
        })
        .catch((error)=>{
          console.log('ERRO AO FAZER O LOGIN' + error);
        })
      }
    



    return(
        <AuthContext.Provider 
        value={{
            signed: !!user,
            user, 
            loading, 
            signUp,
            signOut,
            login
        }}
        >
            {/* 
            propriedade "signed" está sendo usada no route e ela recebe a state de user, para fazer a autenticação e realizar o login

            !!user => a duas exclamações estão convertendo o conteudo da state user em booleano, logo se tiver algo dentro do user, ela returna um true agora se não tiver, ele retorna um false  */}

            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

