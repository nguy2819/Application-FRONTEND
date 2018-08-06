import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home3 extends Component {
    render(){
        return(
            <div>
                <h1> Home3 </h1>
                <button type="button" className="btn btn-primary">Home 1<Link to="/">Home 1</Link></button>
                <br />
                <br />
                <button type="button" className="btn btn-primary">Home 2<Link to="/home2">Home2</Link></button>

            </div>
        )
    }
}

export default Home3;