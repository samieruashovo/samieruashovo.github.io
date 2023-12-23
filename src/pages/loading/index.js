import React, { Component } from 'react';
import '../loading/style.css';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';
import PuffLoader from "react-spinners/PuffLoader";

class Loading extends Component {

  state = {
    redirect: false
  }

  // componentDidMount() {
  //    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  
  //   ReactGA.initialize("UA-154721739-1");
  //   ReactGA.pageview('shovo.tech - Loading Screen');

  // }
    
  // componentWillUnmount() {
  //   clearTimeout(this.id)
  // }

  render() {
    return this.state.redirect
      ? <Redirect to="/home" />
      : <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Samier Shovo</title>
                <link rel="canonical" href="http://shovo.tech/" />
                <meta name="description" content="Samier Shovo - Product Manager | Project Manager | Software Engineer" />
         </Helmet>
        <div className="Loading-header">
          <PuffLoader
            size={'40vw'}
            color={"#fff"}
            loading={true}
          />
        </div>
        </div>
  }
}

export default Loading;
