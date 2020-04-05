import React, { useState } from 'react';

function Headercomponent(props) {
	const [productName, setProductName] = useState('');

	const handleProductChange =(e) => {
		props.setValue(e.target.value);
	}
	const titles = props.compareSummary.titles;
	return (
		<div>
			<div style={{width: '200px', height: '150px', backgroundColor:'#eeeeee'}}></div>
			<h2>Add a product</h2>
			<select value={productName} onChange={e => handleProductChange(e)}>
				<option value=''>Choose a Product</option>
		    	{
		    	    Object.keys(titles).map((key, index) => <option key={index} value={key}>{titles[key].title}</option>)

		    	}
		    </select >
		</div>
	);
}

export default Headercomponent;