import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/MenuItem';
import './Directory.style.scss';

const Directory = ({ sections, info }) => {
  console.log(info);
  return (
    <div className="directory-menu">
      {sections &&
        sections.map(({ id, ...otherProps }, index) => (
          <MenuItem key={id} {...otherProps} />
        ))}
    </div>
  );
};

// Directory.propTypes = {
//   sections: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  sections: state.info.sections,
  info: state.info,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
