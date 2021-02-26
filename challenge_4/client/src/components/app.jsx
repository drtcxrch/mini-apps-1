import React from 'react';
import css from '../../dist/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: 6,
            columns: 7,
        }

        this.createBoard = this.createBoard.bind(this);
    }

    createBoard() {
        const {rows, columns} = this.state;
        const rowViews = [];

        for (var i = 0; i < this.state.rows; i++) {
            const columnViews = [];
            for (var j = 0; j < this.state.columns; j++) {
                columnViews.push(
                    <div
                        key={'column-' + j}
                        style={{width: 100, height: 100, backgroundColor: 'white', border: '1px solid #333'}}
                    ></div>
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