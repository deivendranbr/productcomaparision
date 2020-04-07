import React,{useState} from 'react';
import Headercomponent from './Headercomponent';
import Rowcomponent from './Rowcomponent';
import Productdisplay from './Productdisplay';

import './styles/Tablecomponent.css';

function Tablecomponent(props) {
	const [selectedCount, setSelectedCount] = useState(0);
	const [primary, setPrimary] = useState('TVSE8FMZ9AQMEGC6');
	const [secondary, setSecondary] = useState(null);
	const [isDiffChecked, enableDiffCheck] = useState(false);
	const featuresList = props.data.featuresList;

	let headerComponent = (productid, callback) => {
		if (productid) {
			return <Productdisplay 
						imageurl={props.data.compareSummary.images[productid]} 
						title={props.data.compareSummary.titles[productid]}
						pricesummary={props.data.compareSummary.productPricingSummary[productid]}
						onClose={() => {
							setSelectedCount(0);
							callback(null);
						}}
					/>
		} else {
			return <Headercomponent 
	    		compareSummary={props.data.compareSummary} 
	    		setValue={ (value) => {
	    			callback(value);
	    			setSelectedCount(selectedCount + 1);
    			}}
    		/>
		}
	}
	return (
		<table cellSpacing="0" cellPadding="0">
			<tbody>
				<tr>
				    <td>
				    	<h2 style={{margin: '0', position: 'relative', top: '-60px'}}>Compare</h2>
				    	<p style={{margin: '0', position: 'relative', top: '-50px'}}>{selectedCount} item selected</p>
				    	<div>
				    		<input type="checkbox" value={isDiffChecked} onClick={(e)=>enableDiffCheck(!isDiffChecked)} />
				    		show only differences
				    	</div>
				    </td>
				    <td>
				    	{headerComponent(primary, setPrimary)}
				    </td>
				    <td>
				    	{headerComponent(secondary, setSecondary)}
			    	</td>
				</tr>
				{
					featuresList.map(data => {
						return (
							<React.Fragment key={data.title}> 
								<tr key={data.title} className="feature-title">
									<td>{data.title}</td>
									<td></td>
									<td></td>
								</tr>
								<Rowcomponent data={data} primary={primary} secondary={secondary} showDifference={isDiffChecked} />
							</React.Fragment>
						)
					})
				}
			</tbody>
			
		</table>
	);
}

export default Tablecomponent;