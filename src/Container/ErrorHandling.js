import React, {Component} from 'react';

class ErrorHandling extends Component
{
constructor(props)
{
super(props)
this.state={haserror:false};
}
callomponentDidCatch(error,info)
{
	this.setState({haserror:true});
}

render()
{
if(this.state.haserror)
{
return(
<h1>Error on this page</h1>)
}
else
{
return (this.props.children)
}
}
}
export default ErrorHandling;