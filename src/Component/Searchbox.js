import React from 'react';

const Searchbox=({searchchange})=>
{
return(
<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search member' onChange={searchchange}/>
);
}

export default Searchbox;