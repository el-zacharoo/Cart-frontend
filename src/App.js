import React, { lazy, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";

import Skeleton from './components/PageSkeleton';
import custom from './theme';

const Product = lazy(() => import('./pages/product'));

let theme = createMuiTheme(custom);
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Navbar />
        <CssBaseline />
        <Router>
          <Switch>
            <Suspense fallback={<Skeleton variant="default" />}>
              <Route exact path='/' component={Product} />
            </Suspense>
          </Switch>
        </Router>
      </div>

    </ThemeProvider>
  )
}
export default App
