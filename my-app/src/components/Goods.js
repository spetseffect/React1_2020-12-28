import React, {Component} from 'react';
import Product from './Product';

export default class Goods extends Component{
    render(){
        return(
             <div className="row">
                {this.props.data.map(function (p) {
                    return <Product key={p.id} name={p.name} image={p.image}></Product>
                })}
            </div>
        );
    }
}