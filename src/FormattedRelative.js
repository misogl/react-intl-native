import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import Intl from 'react-intl';

const FormattedRelative = props => (
  <Intl.FormattedRelative {...props}>
    {localized => <Text style={props.style}>{localized}</Text>}
  </Intl.FormattedRelative>
);

FormattedRelative.propTypes = {
  style: PropTypes.any,
};

export default FormattedRelative;
