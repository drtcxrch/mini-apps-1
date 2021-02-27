import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: 6,
            columns: 7,
            moves: [],
            playerTurn: 'red'
        }

        this.createBoard = this.createBoard.bind(this);
        this.getPiece = this.getPiece.bind(this);
        this.resetBoard = this.resetBoard.bind(this);
        this.addMove = this.addMove.bind(this);
        this.checkForRowWin = this.checkForRowWin.bind(this);
        this.checkForColWin = this.checkForColWin.bind(this);
        this.checkForWin = this.checkForWin.bind(this);
        this.getWinningMovesForDiag = this.getWinningMovesForDiag.bind(this);
    }

    resetBoard() {
        this.setState({
            moves: [],
            winner: null
        })
    }

    getPiece(x, y) {
        const list = this.state.moves.filter((item) => {
            return (item.x === x && item.y === y);
        });
        return list[0];
    }

    checkForRowWin(x, y, player) {
        console.log(this);
        console.log(x, y, player);
        let winningMoves = [{ x, y }]

        for (let column = x + 1; column < x + 4; column += 1) {
            const checkPiece = this.getPiece(column, y);

            if (checkPiece && checkPiece.player === player) {
                winningMoves.push({x: column, y : y});
            } else {
                break;
            }
        }
        for (let column = x - 1; column > x - 4; column -= 1) {
            const checkPiece = this.getPiece(column, y);
            if (checkPiece && checkPiece.player === player) {
                winningMoves.push({x: column, y: y});
            } else {
                break;
            }

            if (winningMoves.length > 3) {
                this.setState({winner: player, winningMoves});
                console.log(winningMoves);
                return true;
            }
        }


    }

    checkForColWin(x, y, player) {
        let winningMoves = [{ x, y }]

        for (let row = y + 1; row < y + 4; row += 1) {
            const checkPiece = this.getPiece(x, row);
            if (checkPiece && checkPiece.player === player) {
                winningMoves.push({x : x, y : row});
            } else {
                break;
            }
        }
        for (let row = y - 1; row > y - 4; row -= 1) {
            const checkPiece = this.getPiece(x, row);
            if (checkPiece && checkPiece.player === player) {
                winningMoves.push({ x: x, y: row });
            } else {
                break;
            }

            if (winningMoves.length > 3) {
                this.setState({ winner: player, winningMoves });

                return true;
            }
        }
    }

    getWinningMovesForDiag(x, y, xDiag, yDiag) {
        const winningMoves = [{x: x, y: y}];
        const player = this.getPiece(x, y).player;

        for (let diag = 1; diag <= 3; diag++) {
            const checkX = x + xDiag * diag;
            const checkY = y + yDiag * diag;

            const checkPiece = this.getPiece(checkX, checkY);

            if (checkPiece && checkPiece.player === player) {
                winningMoves.push({x: checkX, y: checkY});
            } else {
                break;
            }
        }

        for (let diag = -1; diag >= -3; diag--) {
            const checkX = x + xDiag * diag;
            const checkY = y + yDiag * diag;

            const checkPiece = this.getPiece(checkX, checkY);

            if (checkPiece && checkPiece.player === player) {
                winningMoves.push({ x: checkX, y: checkY });
            } else {
                break;
            }
        }

        return winningMoves;
    }

    checkForWin(x, y, player) {
        const diags = [{x: 1, y: 0}, {x: 0, y: 1}, {x: -1, y: 1}, {x: 1, y: 1}];

        for (let i = 0; i < diags.length; i++) {
            const diag = diags[i];
            const winningMoves = this.getWinningMovesForDiag(x, y, diag.x, diag.y);

            if (winningMoves.length > 3) {
                this.setState({winner: player, winningMoves})
            }
        }
        return this.checkForColWin(x, y, player) || this.checkForRowWin(x, y, player);
    }

    addMove(x, y) {
        const { playerTurn } = this.state;
        const nextPlayerTurn = playerTurn === 'red' ? 'yellow' : 'red';
        let availablePosition = null;

        for (let position = this.state.rows - 1; position >= 0; position--) {
            if (!this.getPiece(x, position)) {
                availablePosition = position;
                break;
            }
        }

        if (availablePosition !== null) {
            this.setState({ moves: this.state.moves.concat({ x, y: availablePosition, player: playerTurn }), playerTurn: nextPlayerTurn }, () => this.checkForWin(x, availablePosition, playerTurn));
        }

    }

    createBoard() {
        const {rows, columns, winner} = this.state;
        const rowViews = [];

        for (let row = 0; row < this.state.rows; row++) {
            const columnViews = [];
            for (let column = 0; column < this.state.columns; column++) {

                const piece = this.getPiece(column, row);

                columnViews.push(
                    <div
                        key={column}
                        onClick={() => {this.addMove(column, row) }}
                        style={{width: '8vw', height: '8vw', backgroundColor: 'blue', display: 'flex', padding: 5, cursor: 'pointer'}}
                    >
                        <div style={{borderRadius: '50%', backgroundColor: 'white', flex: 1, display: 'flex'}}>
                            {piece ? <div style={{ backgroundColor: piece.player, flex: 1, borderRadius: '50%', border: '1px solid'}}/> : undefined}
                        </div>
                    </div>
                )
            }
            rowViews.push(
                <div
                    key={row}
                    style={{ display: 'flex', flexDirection: 'row' }}
                >{columnViews}</div>
            )
        }

        return (
            <div style={{ backgrounColor: 'red', display: 'flex', flexDirection: 'column'}}>
                {winner && alert(`${winner} WINS!!`)}
                {rowViews}
            </div>
        )

    }

    render() {

        return (
            <div>
                {this.createBoard()}
                <br/>
                <button onClick={this.resetBoard}>New Game!</button>
            </div>
        )
    }

}

export default App;