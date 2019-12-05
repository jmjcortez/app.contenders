import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';

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

export default compose(
    connect(mapStateToProps),
    handlers,
    lifecycles
)(Stats);