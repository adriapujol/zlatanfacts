import React, { Component } from 'react';
import Category from './Category';
import Facts from './Facts';
import ibra from './img/ibra.png';
import logo from './img/ibra_logo.png';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      category: "animal",
      fact: "Zlatan once participated in the running of the bulls. He walked.",
      loading: false,
    }
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(json => {
        this.setState({
          categories: json,
        })
      });
  };


  changeName(str){
    return str.replace("Chuck Norris", "Zlatan");
  }

  
  handleCategory = (e) => {
    this.setState({
      category: e.target.value,
    })
  }
  
  onSubmitCategory = async () => {

    try {
      this.setState({
        loading: true,
      })
      const factUrl = `https://api.chucknorris.io/jokes/random?category=${this.state.category}`;
      const response = await fetch(factUrl)
      const fact = await response.json();
      this.setState({
        fact: this.changeName(fact.value),
      });
    } catch(err) {

    } finally {
      this.setState({
        loading: false,
      })
    }
  }

  render() {

    const { categories, fact, loading } = this.state;

    return (
      <div className="container">
        <header>
          <img className="logo" src={logo} alt="Zlatan Facts" />
          <nav className="navbar">
            <Category categories={categories} onSubmitCategory={this.onSubmitCategory} handleCategory={this.handleCategory} />
          </nav>
        </header>
        <section>
          <img className="ibra" id="ibra" src={ibra} alt="Ibra"></img>
          <Facts fact={fact} loading={loading} />
          <div className="bg-letters">zlatan<br />ibrahimović<br />facts</div>
        </section>
        <footer>by adrienhill</footer>
      </div>
    );
  }

}

export default App;
