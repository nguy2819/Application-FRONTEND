### FETCH

```
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
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" onChange={e => this.setState({ firstName: e.target.value })} />
                <input type="text" placeholder="Last Name" onChange={e => this.setState({ lastName: e.target.value })} />
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Home2;
```
