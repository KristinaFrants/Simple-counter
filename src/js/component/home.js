import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// function SimpleCounter(props) {
// 	return (
// 		<div className="bigCounter row" style={{ backgroundColor: "black" }}>
// 			<div className="col digit col">
// 				<i className="far fa-clock" />
// 			</div>
// 			<div className="four digit col">
// 				<p>{props.digitFour % 10}</p>
// 			</div>
// 			<div className="three digit col">
// 				<p>{props.digitThree % 10}</p>
// 			</div>
// 			<div className="two digit col">
// 				<p>{props.digitTwo % 10}</p>
// 			</div>
// 			<div className="one digit col">
// 				<p>{props.digitOne % 10}</p>
// 			</div>
// 		</div>
// 	);
// }

// SimpleCounter.propTypes = {
// 	digitFour: PropTypes.number,
// 	digitThree: PropTypes.number,
// 	digitTwo: PropTypes.number,
// 	digitOne: PropTypes.number
// };

// let counter = 0;

// setInterval(function() {
// 	const four = Math.floor(counter / 1000);
// 	const three = Math.floor(counter / 100);
// 	const two = Math.floor(counter / 10);
// 	const one = Math.floor(counter / 1);
// 	// console.log(four);
// 	counter++;
// 	//render your react application
// 	ReactDOM.render(
// 		<SimpleCounter
// 			digitOne={one}
// 			digitTwo={two}
// 			digitThree={three}
// 			digitFour={four}
// 		/>,
// 		document.querySelector("#app")
// 	);
// }, 10);

// ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
