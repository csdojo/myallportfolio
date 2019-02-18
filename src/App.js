import React, {Component} from 'react';
// import components from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import apps from './apps.json';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    apps,
    apps: apps,
  };
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          {/* <Route exact path="/projects" component={Projects}/> */}
          <Route
            render={() => <h1 className="text-center">Awesome Apps Here
            <span role="img">😍</span>
            <div> {
            this.state.apps.map(apps => (
              <Projects key={apps.id}
              appname={apps.appname}
              shortDes={apps.shortDes}
              description={apps.description}
              image={apps.image}
              link={apps.link}
              />
            ))
          }</div>
          </h1>
        }/>
        </Switch>
      </div>
    </Router>

    )
    }
}


export default App;
