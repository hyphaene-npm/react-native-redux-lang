import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { getLocale } from '../redux';

/* eslint-disable-next-line */
class Translate extends Component {
	render() {
		const { value, Component, format, ...props } = this.props;
		const RenderComponent = Component || Text;
		return <RenderComponent>{format(i18n.t(value, props))}</RenderComponent>;
	}
}

Translate.defaultProps = {
	Component: Text,
	format: text => text,
};

Translate.propTypes = {
	Component: PropTypes.any,
	value: PropTypes.string.isRequired,
	format: PropTypes.func,
};

export const mapStateToProps = state => ({
	locale: getLocale(state),
});

export default connect(mapStateToProps)(Translate);
