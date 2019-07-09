import React from 'react';

import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  
  handleText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = e => {
    console.log('logging in');
    localStorage.setItem('username', this.state.username);
  }

  render() {
    return (
      <div className='Login'>
        <h1>Instagram</h1>
        <form onSubmit={this.login}>
          <div className="user-input">
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' id='username' value={this.state.username} onChange={this.handleText} />
          </div>
          <div className="pass-input">
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' value={this.state.password} onChange={this.handleText} />
          </div>
          <input className="button" type='submit' />
        </form>
      </div>
    )
  }
}

export default LoginPage;