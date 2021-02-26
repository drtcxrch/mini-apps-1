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
    }

    resetBoard() {
        this.setState({
            moves: []
        })
    }

    getPiece(x, y) {
        const list = this.state.moves.filter((item) => {
            return (item.x === x && item.y === y);
        });
        return list[0];
    }

    addMove(x, y) {
        console.log(x, y);
        const { playerTurn } = this.state;
        const nextPlayerTurn = playerTurn === 'red' ? 'yellow' : 'red';
        this.setState({moves: this.state.moves.concat({x, y, player: playerTurn}), playerTurn: nextPlayerTurn});
    }

    createBoard() {
        const {rows, columns} = this.state;
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
                {rowViews}
            </div>
        )

    }

    render() {

        return (
            <div>
                {this.createBoard()}
            </div>
        )
    }

}

export default App;