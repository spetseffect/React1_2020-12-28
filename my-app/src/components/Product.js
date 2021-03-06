import React, {Component} from 'react';

export default class Product extends Component {
	render() {
		return (
			<div className="col-12 col-sm-6 col-md-4 col-lg-3">
 				<div className="text-center">
 					<img className="img-fluid" src={this.props.image} height="120px" alt={this.props.name}/>
 				</div>
 				<div className="rounded mx-auto d-block">
 					<div className="text-center"> {this.props.name} </div>
 				</div>
 			</div>
		);
	}
} 