import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const back = '#FFE4E1';
const yellow = 'rgb(1, 139, 252)';

class Square extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: this.props.value,
            color: back
        };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        const newColor = this.state.color === yellow;
        this.setState({color: newColor});
        this.setState({value: 'X'});
    }

    render() {
        return (
            <button 
                className="square" 
                onClick={this.changeColor}
                style={{background: this.state.color}}> 
            {this.state.value}
            </button>
        );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i+1} />;
    }
  
    render() {
      const status = 'X Effect';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className="board-row">
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
          </div>
          <div className="board-row">
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="body">
            <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div></div>
                <ol></ol>
            </div>
            </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  