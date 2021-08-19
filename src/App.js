import Landing from './components/landing';
import Questions from './components/questions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import 'fontsource-roboto';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>       
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route path="/about" component={About} /> */}
          <Route path='/questions' component={Questions} />
          
        </Switch>
      </Router>      
    </div>
  );
}

export default App;










