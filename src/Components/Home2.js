import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home2 extends Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify({ ...this.state })

        fetch('http://localhost:4000', {
            method: 'post',
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    render() {
        console.log(this);
        return (
            <div>
                <h1> Home2 </h1>
                <button type="button" className="btn btn-primary">Home 1<Link to="/">Home 1</Link></button>
                <br />
                <br />
                <button type="button" className="btn btn-primary">Home 3<Link to="/home3">Home3</Link></button>


                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"
                            onChange={e => this.setState({ firstName: e.target.value })} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Last Name"
                            onChange={e => this.setState({ lastName: e.target.value })} />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Home2;