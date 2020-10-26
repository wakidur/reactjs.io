import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../Collection/Collection';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
};

export default ShopPage;
