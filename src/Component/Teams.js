import React from 'react';

const Teams =({id,name,email})=>
{	
return(
<div className="Teams tc bg-light-green dib br2 ma3 grow shadow-5">
<div>
<img src={`https://robohash.org/${name}?size=250x250`} alt="memberphoto"/>
</div>
<div>
<h2>{name}</h2>
<p>{email}</p>
</div>
</div>
);
}
export default Teams;