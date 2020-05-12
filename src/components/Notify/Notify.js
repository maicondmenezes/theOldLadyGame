import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { withStyles }       from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { changeNotify } from '../../store/actions/notify.action'

const styles = {
  message : {
    display   : 'flex',
    aligItems : 'center'
  }
}

export class Notify extends Component {

  handleClose = () => {
    this.props.changeNotify ({
      open : false
    })
  }

  render() {
    return (
      <Snackbar
        open = { this.props.notify.open }
        anchorOrigin = {{
          vertical : this.props.notify.vertical,
          horizontal : this.props.notify.horizontal
        }}
        autoHideDuration = { this.props.notify.time }
        onClose = { this.handleClose } 
      >
        <Alert 
          onClose={() => {
            this.props.changeNotify ({
              open : false
            })
          }}
          elevation = {6} 
          variant   = 'filled'
          severity  = {this.props.notify.severity} 
        >
          { this.props.notify.msg }
        </Alert>      
      </Snackbar>
    )
  }
}

const mapStateToProps = (state) => ({
  notify : state.notifyReducer
  
})

const mapDispatchToProps = dispatch => ({
  changeNotify : (value) => dispatch(changeNotify(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Notify))
