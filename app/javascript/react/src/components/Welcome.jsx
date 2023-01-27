import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Welcome = () => {
return(
<div className='container'>
<h1>Welcome to my Rails 7 App!!</h1>
<p>Here we go. Going to expand on this.</p>
</div>
)
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'))
})

export default Welcome
