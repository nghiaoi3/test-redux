/*import { takeLatest, put, call } from 'redux-saga/effects';

import fetchFailed from './components/actions';
import setRecords from './components/actions';


export default function *onFetchRecords() {
  yield takeLatest('RECORDS/FETCH', function async fetchRecords() {

    try {
        const response = await fetch('https://api.service.com/endpoint');
        const responseBody = response.json();
    } catch (e) {
        yield put(fetchFailed(e));
        return;
    }

    yield put(setRecords(responseBody.records));
  });
}
*/