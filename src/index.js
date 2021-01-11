import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 函数组件
// function Square(props) {
// 	return (
// 		<button className="square" onClick={props.onClick}>
// 			{props.value}
// 		</button>
// 	)
// }

// class Board extends React.Component {
// 	renderSquare(i) {
// 		return (
// 			<Square
// 				value={this.props.squares[i]}
// 				onClick={() => this.props.onClick(i)}
// 			/>
// 		);
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<div className="board-row">
// 					{this.renderSquare(0)}
// 					{this.renderSquare(1)}
// 					{this.renderSquare(2)}
// 				</div>
// 				<div className="board-row">
// 					{this.renderSquare(3)}
// 					{this.renderSquare(4)}
// 					{this.renderSquare(5)}
// 				</div>
// 				<div className="board-row">
// 					{this.renderSquare(6)}
// 					{this.renderSquare(7)}
// 					{this.renderSquare(8)}
// 				</div>
// 			</div>
// 		);
// 	}
// }

// class Game extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			history: [{
// 				squares: Array(9).fill(null)
// 			}],
// 			stepNumber: 0,
// 			xIsNext: true
// 		}
// 	}

// 	handleClick(i) {
// 		const history = this.state.history.slice(0, this.state.stepNumber + 1);
// 		const current = history[history.length - 1];
// 		const squares = current.squares.slice();
// 		if (calculateWinner(squares) || squares[i]) {
// 			return;
// 		}
// 		squares[i] = this.state.xIsNext ? 'X' : 'O';
// 		this.setState({
// 			history: history.concat([{
// 				squares: squares
// 			}]),
// 			stepNumber: history.length,
// 			xIsNext: !this.state.xIsNext
// 		});
// 	}

// 	jumpTo(step) {
// 		this.setState({
// 			stepNumber: step,
// 			xIsNext: (step % 2) === 0
// 		});
// 	}

// 	render() {
// 		const history = this.state.history;
// 		const current = history[this.state.stepNumber];
// 		const winner = calculateWinner(current.squares);

// 		const moves = history.map((step, move) => {
// 			const desc = move ?
// 				'Go to move #' + move :
// 				'Go to game start';
// 			return (
// 				<li key={move}>
// 					<button onClick={() => this.jumpTo(move)}>{desc}</button>
// 				</li>
// 			)
// 		})

// 		let status;
// 		if (winner) {
// 			status = 'winner: ' + winner;
// 		} else {
// 			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
// 		}

// 		return (
// 			<div className="game">
// 				<div className="game-board">
// 					<Board
// 						squares={current.squares}
// 						onClick={(i) => this.handleClick(i)}
// 					/>
// 				</div>
// 				<div className="game-info">
// 					<div>{status}</div>
// 					<ol>{moves}</ol>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// function calculateWinner(squares) {
// 	const lines = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];
// 	for (let i = 0; i < lines.length; i++) {
// 		const [a, b, c] = lines[i];
// 		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
// 			return squares[a];
// 		}
// 	}
// 	return null;
// }


// ReactDOM.render(
// 	<Game />,
// 	document.getElementById('root')
// );

// class LikeButton extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			liked: false
// 		}
// 		this.handleClick = this.handleClick.bind(this)
// 	}
// 	handleClick(event) {
// 		this.setState({ liked: !this.state.liked });
// 	}
// 	render() {
// 		var text = this.state.liked ? 'like' : 'haven\'t liked';
// 		return (
// 			<p onClick={this.handleClick}>
// 				You {text} this. Click to toggle.
// 			</p>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<LikeButton />,
// 	document.getElementById('root')
// );

// class Input extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = { value: 'Hello!' }
// 		this.handleChange = this.handleChange.bind(this)
// 	}
// 	handleChange(event) {
// 		this.setState({ value: event.target.value });
// 	}
// 	render() {
// 		var value = this.state.value;
// 		return (
// 			<div>
// 				<input type="text" value={value} onChange={this.handleChange} />
// 				<p>{value}</p>
// 			</div>
// 		);
// 	}
// }

// ReactDOM.render(
// 	<Input />,
// 	document.getElementById('root')
// );

// class UserGist extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: '',
//       lastGistUrl: ''
//     };
//   }

//   componentDidMount() {
//     $.get(this.props.source, function(result) {
//       var lastGist = result[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.username}'s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   document.getElementById('root')
// );

class LikeButton extends Component {
	static defaultProps = {
		likedText: '取消',
		unlikedText: '点赞'
	}

	constructor() {
		super()
		this.state = { isLiked: false }
	}

	handleClickOnLikeButton() {
		this.setState({
			isLiked: !this.state.isLiked
		})
	}

	render() {
		return (
			<button onClick={this.handleClickOnLikeButton.bind(this)}>
				{this.state.isLiked
					? this.props.likedText
					: this.props.unlikedText} 👍
			</button>
		)
	}
}

class Index extends Component {
	constructor() {
		super()
		this.state = {
			likedText: '已赞',
			unlikedText: '赞'
		}
	}

	handleClickOnChange() {
		this.setState({
			likedText: '取消',
			unlikedText: '点赞'
		})
	}

	render() {
		return (
			<div>
				<LikeButton
					likedText={this.state.likedText}
					unlikedText={this.state.unlikedText} />
				<div>
					<button onClick={this.handleClickOnChange.bind(this)}>
						修改 wordings
          </button>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
);