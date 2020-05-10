import React from 'react';
import {StaticQuery, graphql, Link} from 'gatsby';
import './Header.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery{
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <Link to="/"><h1 className="header-title">{data.site.siteMetadata.title}</h1></Link>
        <div className="div-list">
          <ul>
            <Link to="/"><li className="list-meta">home</li></Link>
            <Link to="/404"><li className="list-meta">git</li></Link>
            <Link to="/404"><li className="list-meta">twitter</li></Link>
          </ul>
        </div>
      </header>
    )}
  />
)