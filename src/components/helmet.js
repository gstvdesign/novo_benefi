import React from "react"
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>          
        	<meta charSet="utf-8" />          
        	<title>Gustavo Nering</title> 
        </Helmet>      
      </div>
    )
  }
}