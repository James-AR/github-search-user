import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

   const res = await axios.get('https://api.github.com/users')

   this.setState({ users: res.data, laoding: false })
   console.log(this.state.users)
  }

  render() {
    const { loading, users } = this.state

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
        <UserItem />
      </div>
    );
  }
}

export default App;
