import { Counter } from './features/counter/Counter';
import MuiThemeProvider from './theme';
import { Routes, Route } from 'react-router-dom';
import QuestionsPage from './pages/QuestionsPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/Login';
import ProtectedLayout from './layouts/ProtectedLayout';

function App() {

  const Questions = (
    <ProtectedLayout>
      <QuestionsPage />
    </ProtectedLayout>
  );
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/questions' element={Questions} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    // <div className='App'>
    //   <header className='App-header'>
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className='App-link'
    //         href='https://reactjs.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className='App-link'
    //         href='https://redux.js.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className='App-link'
    //         href='https://redux-toolkit.js.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className='App-link'
    //         href='https://react-redux.js.org/'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
