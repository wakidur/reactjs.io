import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/MenuItem';
import './Directory.style.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections &&
      sections.map(({ id, ...otherProps }, index) => (
        <MenuItem key={id} {...otherProps} />
      ))}
  </div>
);

// Directory.propTypes = {
//   sections: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  sections: state.info.sections,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
