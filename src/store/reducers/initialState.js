export default {
  auth : {
    token : {},
    credentials : {
      username : '',
      password : '',
      picture : '',
    }
  },
  register : {
    data : {
      picture  : './grandmaProfile.jpg',
      name     : '',      
      email    : '',
      login    : '',
      password : '',
      
    },    
    error : {},
    success : false
  },
  loading : {
    open : false,
    msg  : 'putting grannies to work out' 
  },
  notify : {
    open       : false,
    // class      : 'success',
    vertical   : 'top',
    horizontal : 'center',
    time       : 3000,
    msg        : '',
    severity   : 'info'
  } 
}