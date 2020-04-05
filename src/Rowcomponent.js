import React from 'react';

function Rowcomponent({data, primary, secondary, showDifference}) {
	return (
		<>
			{
				data.features.map((feature, index) => {
					return (showDifference === true && feature.values[primary] === feature.values[secondary]) ? 
						null : 
						(
							<tr key={index}>
								<td>{feature.featureName}</td>
								<td>{primary ? feature.values[primary] : ''}</td>
								<td>{secondary ? feature.values[secondary] : ''}</td>
							</tr>
						)
				})
			}
		</>
	)
}

export default Rowcomponent;