import React, { useState } from 'react';

function Headercomponent(props) {
	const [productName, setProductName] = useState('');

	const handleProductChange =(e) => {
		setProductName(e.target.value);
	}
	const titles = props.compareSummary.titles;
	return (
		<div>
			<h2>Add a product</h2>
			<select value={productName} onChange={e => handleProductChange(e)}>
				<option value=''>Choose a Product</option>
		    	{
		    	    Object.keys(titles).map((key, index) => <option value={key}>{titles[key].title}</option>)

		    	}
		    </select >
		</div>
	);
}

export default Headercomponent;