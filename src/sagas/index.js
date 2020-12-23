import { takeLatest, call, put } from "redux-saga/effects";
import SwaggerClient from 'swagger-client';
import {
  requested,
  succeed,
  failed,  
} from '../reducers/apiSlice';

const scheme = process.env.REACT_APP_API_PROTOCOL || 'https';

export default function* sagas() {
  yield takeLatest(({
    payload: {
      operationId = null
    }
  }) => {
    //return false;
    //console.log(typeof operationId, "takeLatest", operationId);
    return typeof operationId === 'string' && operationId.length > 0;
  }, performApiAction);
}

function* performApiAction(action) {

  const {
    payload: {
      output = 'output',
      operationId = '',
      parameters = {}
    }
  } = action;

  //console.log(operationId, parameters, "performApiAction");

  try {
    const client  = yield call(() => SwaggerClient(
      `${process.env.REACT_APP_T3_API}/${process.env.REACT_APP_BASE_PATH}/swagger.json`
    ));

    let response = {};
      console.log("operationId", operationId);
      const result = yield call(() => client.execute({
        scheme,
        operationId,
        parameters
      }));

      response = result.obj;
      yield put(succeed({
        response,
        output
      }));
  } catch( error ) {
    //console.log(error, "ERROR");
    yield put(failed({
      error: error.response 
        ? error.response.obj.error : {
          messages:[
            'Api call failed or check your internet connection'
          ]
        }
    }));  
  }
}
