import React from 'react';

function Title({ children, id }) {
	return <h1 id={id && id}>{children}</h1>;
}

export default Title;
