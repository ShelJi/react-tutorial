import React from "react";

const LearnProps = (props) => {
	return (
		<>
			<h1>LearnProps</h1>
			<h4>Name: {props.name}</h4>
			<h4>Age: {props.age}</h4>
		</>
	);
};

export default LearnProps;
