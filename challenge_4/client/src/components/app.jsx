import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: 6,
            columns: 7,
            moves: [
                {x: 0, y: 0, player: 'red'}
            ]
        }

        this.createBoard = this.createBoard.bind(this);
        this.getPiece = this.getPiece.bind(this);
    }

    getPiece(x, y) {
        const list = this.state.moves.filter((item) => {
            return (item.x === x && item.y === y);
        });
        return list[0];
    }

    createBoard() {
        const {rows, columns} = this.state;
        const rowViews = [];

        for (var i = 0; i < this.state.rows; i++) {
            const columnViews = [];
            for (var j = 0; j < this.state.columns; j++) {

                const piece = this.getPiece(j, i);

                columnViews.push(
                    <div
                        key={'column-' + j}
                        style={{width: '8vw', height: '8vw', backgroundColor: 'blue', display: 'flex', padding: 5}}
                    >
                        <div style={{borderRadius: '50%', backgroundColor: 'white', flex: 1, display: 'flex'}}>
                            {piece ? <div style={{ backgroundColor: piece.player, flex: 1, borderRadius: '50%', border: '1px solid'}}/> : undefined}
                        </div>
                    </div>
                )
            }
            rowViews.push(
                <div
                    key={'row-' + i}
                    style={{ display: 'flex', flexDirection: 'row' }}
                >{columnViews}</div>
            )
        }
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
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