import { Component } from 'react';
import { connect } from 'react-redux';
import i18n from 'i18n-js';
import PropTypes from 'prop-types';
import { getLocale } from '../redux';

class I18nProvider extends Component {
	constructor(props) {
		super(props);
		i18n.fallbacks = true;
		i18n.translations = props.translations;
		i18n.locale = props.defaultLocale;
	}

	render() {
		// update locale before rendering the tree to update the whole app
		i18n.locale = this.props.locale;
		return this.props.children;
	}
}

I18nProvider.defaultProps = {
	defaultLocale: 'en',
};

I18nProvider.propTypes = {
	locale: PropTypes.string.isRequired,
	defaultLocale: PropTypes.string,
	children: PropTypes.any.isRequired,
	translations: PropTypes.shape({}).isRequired,
};

export const mapStateToProps = state => ({
	locale: getLocale(state),
});

export default connect(mapStateToProps)(I18nProvider);
