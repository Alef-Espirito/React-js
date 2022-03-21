import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Clientes from './components/pages/Clientes';
import NovoFornecedor from './components/pages/NovoFornecedor';
import Fornecedores from './components/pages/Fornecedores';
import Form from './components/project/ProjectForm';

import Container from './components/layout/Container';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Detalhes from './components/pages/Detalhes';




function App() {
  return (

    
    <Router>
      <Navbar/>      
        <Switch>
          <Container customClass="minHeight">  
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/fornecedores">
              <Fornecedores/>
            </Route>
            <Route exact path="/clientes">
              <Clientes/>
            </Route>
            <Route exact path="/novofornecedor">
              <NovoFornecedor/>
            </Route>
            <Route exact path="/form">
              <Form/>
            </Route>
            <Route exact path="/detalhes">
              <Detalhes/>
            </Route>
          </Container>
        </Switch>      
      <Footer/>
    </Router>
  );
}

export default App;
