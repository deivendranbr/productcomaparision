import React from 'react';

function Productdisplay(props) {
	const styles = {
		div: {
			textAlign: 'right'
		},
		button: {
			borderRadius: '50%',
			padding: '.2em .5em',
			border: '2px solid #eeeeee',
			cursor: 'pointer',
			outline: 'none',
			backgroundColor: 'white'
		}
	}
	debugger;
	return (
		<div>
			<div style={styles.div}><button style={styles.button} onClick={() => props.onClose()}>x</button></div>
			<img src={props.imageurl} width={200} height={150} alt="Product" />
			<div>{props.title.title}</div>
			<div>
				<span>{props.pricesummary.finalPrice}</span>
				<span>{props.pricesummary.finalPrice}</span>
				<span>{props.pricesummary.totalDiscount}</span>
			</div>
		</div>
	)
}

export default React.memo(Productdisplay);