import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const ShopPage = (collections) => (
  <div className="shop-page">
    {collections &&
      collections.map(({ id, ...otherCollection }) => (
        <CollectionPreview key={id} {...otherCollection} />
      ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: state.info.collections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
