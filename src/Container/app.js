import React, {Component} from 'react';
import TeamList from '../Component/TeamList';
import Searchbox from '../Component/Searchbox'
import Scroll from '../Component/Scroll'
import ErrorHandling from '../Container/ErrorHandling'
import '../Container/app.css';

class App extends Component
{
constructor()
{
	super()
	this.state=
	{
		members: [],
		searchfield:''
	}

}

onSearchchange=(e)=>
{
	this.setState({searchfield:e.target.value});
		//console.log(SearchedItems);
}

componentDidMount()
{
fetch('https://jsonplaceholder.typicode.com/users/')
.then(response=>
{
return response.json();
})
.then(users=>this.setState({members:users}))
}
	render()
	{
	const {members,searchfield}=this.state;
	const SearchedItems = members.filter(user => {
		return user.name.toLowerCase().includes(searchfield.toLowerCase())
		})
	return members.length ? 
	<div className="App tc">
	<h1 className="f1">Team Members</h1>
	<Searchbox searchchange={this.onSearchchange}/>
	<Scroll>
	<ErrorHandling>
	<TeamList membersdetails={SearchedItems}/>
	</ErrorHandling>
	</Scroll>
	</div>
	
	: <h1>Error in list</h1>;	
	}
}

export default App;