import React from 'react';
import fire from '../config/fire'
import { Link, BrowserRouter,Route } from 'react-router-dom';
import Register from './Register'
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			error: null
		}
	}
	handleChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}
	handleSubmit = e => {
		
		this.setState({[e.target.name]: e.target.value});
	}
	handleSubmit = e => {
		e.preventDefault();
		const {email, password} = this.state;
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(user => {
				this.props.history.push('/');
			})
			.catch(error => {
				this.setState({error});
			});

	}
	render(){
		const {email, password, error} = this.state;
		return(
			<div className="auth--container">
				
				<h1>Login your account</h1>
				{error && <p className="error-message">{error.message}</p>}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email">Email address</label>
					<input type="text" name="email" id="email" value={email} onChange={this.handleChange} />
					<label htmlFor="password"> password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={this.handleChange}
					/>
					<button className="general-submit" children="Get Started" />
					<BrowserRouter>
                <h2>
                  <Link to={"/register"}> Register</Link>
                </h2>
				  <Route exact path="/register" component={Register}/>
                </BrowserRouter>
				</form>
			</div>
		);
	}
}
export default Login;