import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

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
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )} />
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
