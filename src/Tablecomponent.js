import React,{useState} from 'react';
import Headercomponent from './Headercomponent';
import Rowcomponent from './Rowcomponent';

function Tablecomponent(props) {
	const [selectedCount, setSelectedCount] = useState(0);
	const featuresList = props.data.featuresList;
	return (
		<table>
			<tr>
			    <th>
			    	<h4>Compare</h4>
			    	<p>{selectedCount} item selected</p>
			    </th>
			    <th><Headercomponent compareSummary={props.data.compareSummary} /></th>
			    <th><Headercomponent compareSummary={props.data.compareSummary} /></th>
			</tr>
			{
				featuresList.map(data => {
					return (
						<React.Fragment> 
							<tr>
								<td>{data.title}</td>
								<td></td>
								<td></td>
							</tr>
							<Rowcomponent data={data} />
						</React.Fragment>
					)
				})
			}
			
		</table>
	);
}

export default Tablecomponent;