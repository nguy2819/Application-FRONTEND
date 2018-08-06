import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home1 extends Component {
    render(){
        return(
            <div>
                <h1> Home1 </h1>
                <button type="button" className="btn btn-primary">Home 2<Link to="/home2">Home2</Link></button>
                <br />
                <br />
                <button type="button" className="btn btn-primary">Home 3<Link to="/home3">Home3</Link></button>

            </div>
        )
    }
}

export default Home1;