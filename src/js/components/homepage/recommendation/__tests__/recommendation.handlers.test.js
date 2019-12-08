import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { handleFetchRecommendationList } from '../recommendation.handlers';
import { API } from '../../../../constants/apis';
import { 
    FETCH_RECOMMENDATION_LIST, FETCH_RECOMMENDATION_LIST_SUCCESS, FETCH_RECOMMENDATION_LIST_FAIL
  } from "../../../../actions/recommendation-actions";

describe('Stats handler test', () => {
    it('should dispatch fetch stats success on success', async () => {
        const mock = new MockAdapter(axios);
        mock.onGet(`${API}/api/recommendation/`).reply(200, {
            data: {
                test: 'test'
            }
        });

        const dispatch = jest.fn();
        
        await handleFetchRecommendationList(
            dispatch  
        );

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: FETCH_RECOMMENDATION_LIST,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: FETCH_RECOMMENDATION_LIST_SUCCESS,
            payload: {
                    data: {
                    test: 'test'
                }
            }
        });
    });
});