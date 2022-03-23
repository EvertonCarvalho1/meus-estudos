import React from 'react';
import { useAppSelector } from './redux/hooks/useAppSelector';

const App: React.FC = () => {

  const user = useAppSelector(state => state.user);
 
  return(
    <div>
      Meu nome é {user.name} e tenho {user.age} anos. Traballho como {user.job}. <br />

      <hr />

      <input type="text" value={'...'}/>

      <hr />

      <button>Switch Theme</button>
    </div>
  )
}

export default App;


