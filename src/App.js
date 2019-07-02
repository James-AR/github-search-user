import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import Home from './components/pages/Home'

const App = () => {
  /* useEffect(() => {
    setLoading(true)

    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    dispatch({
      type: SEARCH_USERS,
      payload: res.data
    })
    .then((res) => {
      setUsers(res.data)
      setLoading(false)
    })
  }, []) */

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
