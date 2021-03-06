import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Page import
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { selectCollectionsForPreview } from './redux/shop/shop.utils';

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

import './assets/scss/App.scss';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      try {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        }
        setCurrentUser(userAuth);
        // this function resposible for add data to firestore
        // addCollectionAndDocuments(
        //   'collections',
        //   collectionsArray.map(({ title, items }) => ({ title, items }))
        // );
      } catch (error) {
        console.log(error);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              user ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </React.Fragment>
    );
  }
}

// App.propTypes = {
//   user: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  user: state.user.currentUser,
  collectionsArray: selectCollectionsForPreview(state.info.collections),
});

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
