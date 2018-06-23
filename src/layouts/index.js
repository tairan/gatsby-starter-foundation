import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
    <title>{ data.site.siteMetadata.title }</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/css/foundation-float.min.css" integrity="sha256-TPcVVrzfTETpAWQ8HhBHIMT7+DbszMr5n3eFi+UwIl8= sha384-+aXh7XSzITwlvjelsNWuL1A9rT8pWGaiqMMeUjtKcsWIfzT1oV8Mp3oYxmjPK8Gv sha512-cArttU/Yh+PzfQ/dhCdfBiU9+su+fuCwFxLrlLbvuJE/ynUbstaKweVPs7Hdbok9jlv9cwt+xdk20wRz7oYErQ==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/css/foundation-prototype.min.css" integrity="sha256-JyhZsgvsqjrdl9GPOILi/zyc+z4dcwXiyP1Q7cwWlM0= sha384-GtUT6gOaCY/S1ggTUOnqe5CQAEAZ6oVTmMq3X4vfZrvp+tLgjBEmwVxJnukor+o0 sha512-x3+KBxBjFh8PGncrfDOsJhntYDBFdJxmpb211THYkQOaGWvk7ckZG6prGUpZqz85AXgiispjow06+bDnIxnWDQ==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.4.3/dist/css/foundation-rtl.min.css" integrity="sha256-Az+E7JXW71Srarkum5QPTdnobddg2GqI1i8+nMusgLk= sha384-eBKuNtkGVmsJD0uNnWoKYYVnzDT0PXV+XNyAgmmZwYVn7MSNcaR4i5HjOpSRd0o6 sha512-d0RjiDZM/0NlD+7Y2DhUGuAUdwDIL5lS3GPAD0HEayEcrhuLuRiPYOgFWZik+gsFzsykxSn0KO6jim7ev8kIig==" crossorigin="anonymous" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className="callout large primary">
        <div className="text-center">
            <h1> Gatsby Foundation Starter </h1>
            <h2 className="subheader">The Gatsby starter with foundation</h2>
        </div>
    </div>
    <div className="grid-x container">
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
