import { Http } from '../../settings/globalSettings';
import { changeLoading } from './loading.action';
import { changeNotify } from './notify.action';

export const actionTypes = {
  GET_TOKEN : 'GET_TOKEN',
  LOGOUT    : 'LOGOUT',
  LOADING   : 'LOADING',
  SUCCESS   : 'SUCCESS',
  CHANGE    : 'CHANGE',
  ERROR     : 'ERROR'
}

export const getToken = (token) => ({
  type : actionTypes.GET_TOKEN,
  token
})

export const removeToken = () => ({
  type : actionTypes.LOGOUT,  
})

export const loginSucess = bool => ({
  type : actionTypes.SUCCESS,
  bool  
})

export const loginError = (error) => ({
  type : actionTypes.ERROR, 
  error 
})

export const changeValue = (payload) => ({
  type : actionTypes.CHANGE, 
  payload 
})

export const loading = (bool, msg = null) => ({
  type : actionTypes.LOADING, 
  isLoading : {
    active: bool,
    msg: msg
  } 
})

export const getUserToken = () => dispatch => 
  localStorage.getItem('access_token')
    .then( res => {
      dispatch(loading(false));
      if ( typeof res !== 'undefined' ) {
        dispatch(getToken(res));
      }
    })

export const setUserToken = (token) => dispatch => {
  localStorage.setItem('access_token', token);
  dispatch(loading(false));
  dispatch(loginSucess(true));
}

export const login = (credentials) => {
  return dispatch => {
    dispatch(changeLoading({
      open : true,
      msg  : 'Checking your credentials...'
    }));
    return Http.post('/oauth/token', {
      grant_type : 'password',
      client_id : '2',
      cliente_secret : '0z4bLywLMbyifbItg6oKNclRIXYWzz1yLFWqSiXo',
      username : credentials.username,
      password : credentials.password, 
    })
    .then( res => {
      dispatch(changeLoading({
        open : false,
        msg  : ''
      }));
      if (typeof res !== 'undefined') {
        dispatch(setUserToken(res.data.acces_token))
      }
    })
    .catch( error => {
      dispatch(changeLoading({
        open : false,
        msg  : ''
      }));
      if ( error.response ) {
        if ( error.response.status === 401 || error.response.status === 400) {
          dispatch(changeNotify({
            open       : true,
            msg        : 'There\'s something wrong with your Login data (username or password)',
            severity   : 'error'
          })) 
        }
      } else {
        dispatch(changeNotify({
          open       : true,
          msg        : 'There\'s something wrong with your autenthication',
          severity   : 'error'
        })) 
      }
    })
  }
}
      