import React from 'react';
import Router from 'ampersand-router';
import qs from 'qs';
import xhr from 'xhr';
import Layout from './layout';
import PublicPage from './pages/public';
import RepoPage from './pages/repos';

export default Router.extend({
  renderPage (page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      );
    }

    React.render(page, document.body);
  },
  routes: {
    '': 'home',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },
  home () {
    this.renderPage(<PublicPage/>, {layout: false});
  },
  repos () 
    this.renderPage(<RepoPage/>);
  },
  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      client_id: '0add0352c23ba5066d3c',
      redirect_uri: window.location.origin + '/auth/callback',
      scope: 'user, repo'
    });
  },
  authCallback (query) {
    query = qs.parse(query);

    xhr({
      url: 'https://dmlabelr-auth.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
      console.log(body);
    })

  }
});