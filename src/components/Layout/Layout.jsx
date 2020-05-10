import React from 'react';
import Header from '../Header';
import Container from '../Container';
import Sidebar from '../Sidebar'; 
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';
import './Layout.css';


export default ({ children , title }) => (
  <div>
    <Helmet>
      <meta name='description' content={config.siteDescription}/>
      <link rel="icon" href={favicon}/>
    </Helmet>

    <Header title={title}/>
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="About me"
            description = "I'm student of JavaScrip and Mecatronic engineering"
          />
          <Sidebar
            title="About my blog"
            description = "I created this blog for post anything I can"
          />
        </aside>
      </Container>
    </main>
  </div>
)