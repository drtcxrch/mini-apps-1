import React from 'react';

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
                        style={{width: '8vw', height: '8vw', backgroundColor: '#00a8ff', display: 'flex', padding: 5}}
                    >
                        <div style={{borderRadius: '50%', backgroundColor: 'white', flex: 1}}></div>
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