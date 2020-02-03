import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

import Stats from './stats.component';
import { handleFetchStats } from './stats.handlers';

const mapStateToProps = (state) => {
    return {
        contendersNearbyCount: state.stats.contendersNearbyCount,
        contendersFightingInCity: state.stats.contendersFightingInCity,
        contendersFightingInCountry: state.stats.contendersFightingInCountry,
        contendersGlobalCount: state.stats.contendersGlobalCount,
        contendersPerDiscipline: state.stats.contendersPerDiscipline,
        contendersPerCombatType: state.stats.contendersPerCombatType,
    }
};

const handlers = withHandlers({
    fetchStats: ({ dispatch }) => () => handleFetchStats(dispatch),
});

const lifecycles = lifecycle({
    componentDidMount() {
        this.props.fetchStats();
    }
});

const propTypes ={
    contendersNearbyCount: PropTypes.number,
    contendersFightingInCity: PropTypes.number,
    contendersFightingInCountry: PropTypes.number,
    contendersGlobalCount: PropTypes.number,
    contendersPerDiscipline: PropTypes.object,
    contendersPerCombatType: PropTypes.object,
    fetchStats: PropTypes.func,
 }

export default compose(
    connect(mapStateToProps),
    setPropTypes(propTypes),
    handlers,
    lifecycles
)(Stats);