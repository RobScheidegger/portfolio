import logo from './logo.svg';
import './App.css';
import NavigationComponent from './components/NavigationComponent';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import HomeComponent from './components/Home/HomeComponent';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavigationComponent />
        <Switch>
            <Route path="/" component={HomeComponent} exact />
            <Route path="/projects" component={ProjectsComponent} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
