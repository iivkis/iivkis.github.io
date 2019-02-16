//lib
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Axios from 'axios-jsonp-pro'; 
//style 
import './_global/scss/index.scss';

//components
import Home from './components/Home';
import NotFound from './components/NotFound';
import PageId from './components/PageId/index.jsx';

class App extends Component {


	state = {
		valPageId: 'https://vk.com/iquzy',
		valToken:  '',

		userData: [],
	}

	baseUrl = 'https://api.vk.com/method/';

	fields = [
		'about',
		'activities',
		'bdate',
		'books',
		'domain',
		'followers_count',
		'games',
		'home_town',
		'interests',
		'lists',
		'photo_id',
	]


	componentDidMount() {
		//get token from localStorage
		{
			let token = localStorage.getItem('authToken');
		
			if ( !(token === null) ) {
				this.setState({valToken: token});
			}
		}
	}

	valPageId = (e) => {
		this.setState({valPageId: e.target.value});
	}

	valToken = (e) => {
		let token = e.target.value.trim();

		this.setState({valToken: token}, ()=>{
			localStorage.setItem('authToken', this.state.valToken);
		})
	}

	clickSearch = ({history}) => {
		let idx;
		idx = this.state.valPageId.split('/');
		idx = idx[idx.length-1];
		history.push(`/p/${idx}`);
	}

	clickCopy = (text) => {
		const el = document.createElement('textarea');
		el.value = text;
		document.body.append(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

	queryGetUserData = (idx) => {
		let method = 'users.get';
		let fieldsJoin = '';

		this.fields.forEach( (e) => {
			fieldsJoin += e + ',';
		});

		if (idx !== '0' && idx !== '' && this.state.valToken !== ''){
			Axios.jsonp(this.baseUrl + method, {
				params:{
					access_token: this.state.valToken,
					v:'5.8',
					user_ids:idx,
					fields:fieldsJoin,
				}
			})
			.then(res => {
				if ('response' in res) {
					let data = res.response[0];
					let keys = Object.keys(data)
					let newUserData = [];

					keys.forEach( (e)=>{
						if (data[e] !== '') {
							newUserData.push({name:e, text:data[String(e)]});
						}
					})

					this.setState({userData: newUserData});
				} else {
					alert('Ошибка с при получении данных с vk api')
				}
			})
			.catch(err => console.log(err))
		} else if (this.state.valToken === '') {
			alert('Мне нужен вашь токен!')
		} else {
			alert('такого id не сущетсвует!')
		}
	}

	render() {
		return(
			<BrowserRouter>
				<Switch>
					<Route exact path='/' render={
						props => <Home 
									state={this.state} 
									handleValPageId={this.valPageId} 
									clickSearch={this.clickSearch} />}/>

					<Route path='/p/:idx' render={
						props => <PageId 
									state={this.state} 
									handleValToken={this.valToken}
									clickCopy={this.clickCopy}
									queryGetUserData={this.queryGetUserData} />}/>
					
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;