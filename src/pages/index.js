import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <article className="grid-container">
        <div className="grid-x align-center">
            <div className="cell medium-8">
                <div className="blog-post">
                    <h3>Hi People <small>2018-06-23</small></h3>
                    <img className="thumbnail" src="https://placehold.it/850x350"/>
                    <p> Welcome to your new Gatsby site.
                    </p>
                    <div className="callout">
                        <ul className="menu simple">
                            <li><Link to="/page-2">Go to page 2</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </article>
)

export default IndexPage
