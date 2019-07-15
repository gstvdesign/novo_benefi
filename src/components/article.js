import React from "react"
import articleStyles from "./article.module.css"

export default ({ children }) => (
	<div className={articleStyles.article}>{children}</div>
)