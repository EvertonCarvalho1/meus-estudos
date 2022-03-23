import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setName, setAge, setJob } from './redux/reducers/userReducer';
import { setThemeStatus } from './redux/reducers/themeReducer';

import { useAppSelector } from './redux/hooks/useAppSelector';


const App: React.FC = () => {

  const dispatch = useDispatch();

  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);


  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme));
  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: string) => dispatch(setAge(newAge));
  const changeJob = (newJob: string) => dispatch(setJob(newJob));


  const handleSwitchTheme = () => {
    switchTheme(theme.status === 'light' ? 'dark' : 'light')
  }

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeName(event.target.value)
  }

  const handleAgeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(event.target.value);
  }  

  const handleJobInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeJob(event.target.value);
  }  

  return (
    <div>
      Meu nome é {user.name} e tenho {user.age} anos. Traballho como {user.job}. <br />
      Tema {theme.status}

      <hr />
      <h3>Digite o nome</h3>
      <input
        type="text"
        onChange={handleNameInput}
      />
      <hr />
      <h3>Digite a idade</h3>
      <input
        type="text"
        onChange={handleAgeInput}
      />

      <hr />
      <h3>Digite o trabalho</h3>
      <input
        type="text"
        onChange={handleJobInput}
      />

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  )
}

export default App;


