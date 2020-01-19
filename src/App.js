import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css';
import {List, Card, Button} from 'antd';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import DetailPage from './DetailPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news:[],
      loading: true,
      nextPage: 0,
      loadingMore: true
    }
  }

  // call componentDidMount is invoked immediately after a component is mounted
  componentDidMount(){
    this.setState({loadingMore:true})
    // fetching the resources asynchronously across the network with adding the url as an argument
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new&page=${this.state.nextPage + 1}&api-key=OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        // console.log(myJson);
        this.setState({
          // Similar to news = oldArray + newArray
          news: [...this.state.news, ...myJson.response.docs],
          loading: false,
          nextPage: this.state.nextPage + 1,
          loadingMore: false
        })
      });
  }

  render(){
    // to see if we have something in the state or not, we need to check out if the state is getting set or not
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h2 style={{fontStyle:'italic', textAlign: 'center'}} className="design">New York Times News</h2>
          <img src={logo} className="App-logo" alt="logo" />
          {/* map function returns a function and takes function as an argument; it is used with arrays like news  */}
          {/* index: for iteration use & item: each element inside news array */}
          <Card
            style={{marginLeft: '50px', marginRight : '50px'}}
            loading={this.state.loading}
            actions={[
              <Button
                type="primary"
                onClick={() => this.componentDidMount ()}
                loading={this.state.loadingMore}>
                Load More
              </Button>
            ]}>
            <List>
              {this.state.news.map (newsItem => (
                <List.Item
                  extra={<div>
                    <img src={`https://www.nytimes.com/${newsItem.multimedia[0].url}`} style={{height:'25vw'}}/>
                    <br/>
                    <button>More details</button>
                    {/* <button>
                      <Link to="/details">
                        More details
                      </Link>
                    </button>  */}
                    </div>
                  }
                >
                  <List.Item.Meta
                    title={<h4>{newsItem.headline.main}</h4>}
                    description={(<p style={{ fontStyle:'italic' }}>{newsItem.lead_paragraph}</p>)}
                  />
                </List.Item>
              ))}
            </List>
          </Card>
        </header>
        <BrowserRouter>
          <Switch>
              <Route path="/" Component={App} exact/>
              <Route path="/details/:id" Component={DetailPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;