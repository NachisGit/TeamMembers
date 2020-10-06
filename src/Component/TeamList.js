import React from 'react';
import Teams from './Teams.js';

const TeamList =({membersdetails})=>
{	
return(

<div className="TeamList">
{
membersdetails.map(
(user,i)=>
{
	return (<Teams key={i} name={membersdetails[i].name} id={membersdetails[i].id}  email={membersdetails[i].email}/>);
}
)
}
</div>
);
}
export default TeamList;