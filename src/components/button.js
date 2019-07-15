import React from "react"
import buttonStyles from "./button.module.css"

export default props =>	<a className={buttonStyles.button} href={props.buttonLink}>{props.buttonText}</a>