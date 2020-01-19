import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

class DetailPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[]
    }
  }

  // call componentDidMount is invoked immediately after a component is mounted
  componentDidMount(){
    // fetching the resources asynchronously across the network with adding the url as an argument
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new&api-key=OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        this.setState({
          news: myJson.response.docs
        })
      });
  }

  render(){
    //   console.log(this.state)
    return (
        <div>
            {this.state.news.map (newsItem => {
                return (
                    <div>
                        <h2>{newsItem.abstract}</h2>
                        <p>{newsItem.snippet}</p>
                        <p>Website: <span><a href={newsItem.web_url}>{newsItem.web_url}</a></span></p>
                        {/* <button>
                            <Link to="/">
                                Back to News
                            </Link>
                        </button>    */}
                    </div>
                );     
            })}
        </div>
    );
  }
}

export default DetailPage;