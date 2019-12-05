import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { handleFetchStats } from '../stats.handlers';
import { API } from '../../../../constants/apis';
import { 
  FETCH_STATS, FETCH_STATS_SUCCESS
} from '../../../../actions/stats-actions';

describe('Stats handler test', () => {

    it('should dispatch fetch stats success on success', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet(`${API}/api/stats/overview/`).reply(200, {
            data: {
              test: 'test'
            }
        });

        const dispatch = jest.fn();
        
        await handleFetchStats(
            dispatch  
        );

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: FETCH_STATS,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: FETCH_STATS_SUCCESS,
            payload: {
                 data: {
                    test: 'test'
                }
            }
        });
    });
});