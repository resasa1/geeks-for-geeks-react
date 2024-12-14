import React from 'react';
import ResumeForm from './ResumeForm';
import Jokes from './Jokes';
import PasswordValid from './PasswordValid';
// import IpFinder from './components/IpFinder';

const App = () => {
  return (
    <div className='bg-slate-800'>
      <ResumeForm />
      <Jokes />
      <PasswordValid />
      {/* <IpFinder /> */}
    </div>
  );
};  

export default App;     