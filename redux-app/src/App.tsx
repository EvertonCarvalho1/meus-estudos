import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setName, setAge, setJob } from './redux/reducers/userReducer';
import { useAppSelector } from './redux/hooks/useAppSelector';


const App: React.FC = () => {

  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user);

  const handleNameInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  }, []);
  const handleAgeInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(event.target.value));
  }, []);
  const handleJobInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setJob(event.target.value));
  }, []);

  return (
    <div>
      Meu nome é {user.name} e tenho {user.age} anos. Traballho como {user.job}. <br />

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

      <button>Switch Theme</button>
    </div>
  )
}

export default App;


