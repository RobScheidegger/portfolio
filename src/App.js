import './App.css';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import HomeComponent from './components/Home/HomeComponent';
import { themeLightColor } from './globalStyles';

const appStyles = {
  backgroundColor: themeLightColor,
  width: "100%",
  height: "100vh"
}

function App() {
  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Switch>
            <Route path="/" component={HomeComponent} exact />
            <Route path="/projects" component={ProjectsComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
