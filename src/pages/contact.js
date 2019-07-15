import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
	<div>
		<Link to="/">Home page</Link>
		<Header headerText="Contact Page" />
		<p>Contact us!</p>
	</div>
)