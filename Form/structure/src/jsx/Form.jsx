import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';

class Form extends Component {

  constructor(props){
    super(props);

    this.state = {
      login_val:'',
      password_val:'',
    }
  
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);

  }

  handleLogin(e){
    let val = e.target.value;
    this.setState({login_val:val});
  }

  handlePassword(e){
   let val = e.target.value;
   this.setState({password_val:val});
  }

  signUp(){
    alert(`Вы вошли как: ${this.state.login_val} | ${this.state.password_val}`);
  }

  signIn(){
    alert(`Вы зарегестрировались как: ${this.state.login_val} | ${this.state.password_val} \nТеперь вы можете войти в систему`);
  }

  render(){
   return(
    <form>
      <Input id="login" type="text" pl="Ваш логин" value={this.state.login_val} on_change={this.handleLogin} />
      <Input id="password" type="text" pl="Ваш пароль" value={this.state.password_val} on_change={this.handlePassword} />
      <div className="row row-around">
        <Button theme="success" on_click={this.signUp}>Вход</Button>
        <Button theme="primary" on_click={this.signIn}>Регистрация</Button>
      </div>
    </form>
  );
 }

}

export default Form;