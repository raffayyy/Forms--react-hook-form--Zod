import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <>
      <Login />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
