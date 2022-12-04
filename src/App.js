import { Route, Switch, Redirect } from "react-router-dom";
import AllQuote from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import MainNavigation from "./components/layout/MainNavigation";
import classes from "./components/layout/Layout.module.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
