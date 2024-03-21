import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/*' element={<CustomerRouters/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
