import './Board.css'
import React from 'react'
import Square from '../Square'

class Board extends React.Component {

  renderSquare(i) {
    return(
      <Square 
        playerSimbol = {this.props.squares[i]} 
        onClick = {() => this.props.onClick(i)}
      />
    );
  }
  //  fonte: https://blog.cloudboost.io/for-loops-in-react-render-no-you-didnt-6c9f4aa73778  
  createTable = () => {
    let indexSquare = 0
    let table = []
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 3; j++) {        
        children.push(
          <td className= 'board-square'>
          {this.renderSquare(indexSquare)}
          </td>
        )
        indexSquare = indexSquare + 1
      }
      //Create the parent and add the children
      table.push(<tr className = 'board-row'>{children}</tr>)
    }
    return table
  }

  render(){   
    return(      
      <table className='board-table'>         
        {this.createTable()}  
      </table>    
    );
  }  
}

export default Board