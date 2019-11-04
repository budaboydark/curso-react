import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import routesConfig from './routesConfig';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/"> Home </Link>
        <Link to="/user"> User </Link>
        {routesConfig.map((value, key) => {
          return <Route 
          key={key} 
          path={value.path} 
          component={value.component}
          exact={value.exact} />
        })}
      </div>
    )
  }
}

export default App