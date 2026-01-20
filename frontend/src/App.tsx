import {Routes,Route} from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import AdminPage from './components/AdminPage';
import ProblemPage from './components/ProblemPage';
import ParticularProblem from './components/ParticularProblem';
import AllSubmission from './components/AllSubmission';
import AllPoints from './components/AllPoints';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<SignUpPage />}></Route>
      <Route path='/SignInPage' element={<SignInPage />}></Route>
      <Route path='/AdminPage' element={<AdminPage />}></Route>
      <Route path='/ProblemPage' element={<ProblemPage />}></Route>
      <Route path='/ParticularProblem' element={<ParticularProblem />}></Route>
      <Route path='/AllSubmission' element={<AllSubmission />}></Route>
      <Route path='/AllPoints' element={<AllPoints />}></Route>
     </Routes>
    </>
  )
}

export default App
