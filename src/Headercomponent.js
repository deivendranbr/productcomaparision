import React, { useState } from 'react';

function Headercomponent(props) {
	const [productName, setProductName] = useState('');

	const handleProductChange =() => {
		debugger;
	}
	const titles = Object.values(props.compareSummary.titles);
	debugger;
	return (
		<div>
			<h2>Add a product</h2>
			<select onChange={e => handleProductChange(e)}>
				<option value=''>Default</option>
		    	{
		    	    titles.map((data, index) => <option value={index}>{data.title}</option>)

		    	}
		    </select >
		</div>
	);
}

export default Headercomponent;