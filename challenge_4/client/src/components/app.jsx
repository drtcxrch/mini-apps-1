import React from 'react';

const App = (props) => {

    return (
       <div id="game">It's the <span id="c"></span>&nbsp;player's move.
            <table id="gameboard">
                <tr>
                    <td id="c-1-1"></td>
                    <td id="c-1-2"></td>
                    <td id="c-1-3"></td>
                    <td id="c-1-4"></td>
                    <td id="c-1-5"></td>
                    <td id="c-1-6"></td>
                    <td id="c-1-7"></td>
                </tr>
                <tr>
                    <td id="c-2-1"></td>
                    <td id="c-2-2"></td>
                    <td id="c-2-3"></td>
                    <td id="c-2-4"></td>
                    <td id="c-2-5"></td>
                    <td id="c-2-6"></td>
                    <td id="c-2-7"></td>
                </tr>
                <tr>
                    <td id="c-3-1"></td>
                    <td id="c-3-2"></td>
                    <td id="c-3-3"></td>
                    <td id="c-3-4"></td>
                    <td id="c-3-5"></td>
                    <td id="c-3-6"></td>
                    <td id="c-3-7"></td>
                </tr>
                <tr>
                    <td id="c-4-1"></td>
                    <td id="c-4-2"></td>
                    <td id="c-4-3"></td>
                    <td id="c-4-4"></td>
                    <td id="c-4-5"></td>
                    <td id="c-4-6"></td>
                    <td id="c-4-7"></td>
                </tr>
                <tr>
                    <td id="c-5-1"></td>
                    <td id="c-5-2"></td>
                    <td id="c-5-3"></td>
                    <td id="c-5-4"></td>
                    <td id="c-5-5"></td>
                    <td id="c-5-6"></td>
                    <td id="c-5-7"></td>
                </tr>
                <tr>
                    <td id="c-6-1"></td>
                    <td id="c-6-2"></td>
                    <td id="c-6-3"></td>
                    <td id="c-6-4"></td>
                    <td id="c-6-5"></td>
                    <td id="c-6-6"></td>
                    <td id="c-6-7"></td>
                </tr>
            </table>
            <div class="left leg"></div>
            <div class="right leg"></div>
            <button id="r">New game</button>
        </div>
    )
}

export default App;