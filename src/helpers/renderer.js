import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { default as Routes } from '../client/Routes';

// import Routes from '../client/Routes';

export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.path} context={{}}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      );
    
    var result =  `
                <html>
                    <head></head>
                    <body>
                        <div id="root">${content}</div>
                        <script src="bundle.js"></script>
                    </body>
                </html>
    `;
    return result
};