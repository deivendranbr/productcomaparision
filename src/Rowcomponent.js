import React from 'react';

function Rowcomponent({data}) {
	return (
		<>
			{
				data.features.map(feature => {
					return (
						<tr>
							<td>{feature.featureName}</td>
							<td></td>
							<td></td>
						</tr>
					)
				})
			}
		</>
	)
}

export default Rowcomponent;