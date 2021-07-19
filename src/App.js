import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var{ isLoaded, items } = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    else {

       return (
          <div className="App">
            <ui>
              {items.map(item => (
                <li key={item.id}>
                   Name: {item.name} | Email: {item.email} |
                   Website: {item.website}


                </li>
              ))}
            </ui>
          </div>
    );

    }
  }
}


export default App;