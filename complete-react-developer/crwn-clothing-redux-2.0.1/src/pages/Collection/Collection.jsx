import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.utils';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './Collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items &&
          items.map((item) => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(
    state.info.collections,
    ownProps.match.params.collectionId
  ),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
