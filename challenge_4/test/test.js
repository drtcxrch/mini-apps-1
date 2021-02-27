import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/"
});

import App from '../client/src/components/App';

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe('checkForWin', () => {


  describe('checkForRowWin', () => {
    it('should return a win when there are 4 players pieces in a Row', () => {
      act(() => {
        ReactDOM.render(<App />, rootContainer);
      });
      const wrapper = shallow(<App />);
      const instance = wrapper.instance();
      // expect(wrapper.checkForRow()).equals(true);
      const move1 = instance.checkForRowWin(0, 5, 'red');
      console.log(move1);
      // expect(h1.textContent).to.equal("Hello World");
    });
  })

});

// describe('checkForWin', function () {
//   describe('#checkForRowWin()', function () {
//     it('should return a win when there are 4 players pieces in a Row', function () {
//       var move1 = app.checkForRowWin(0, 5, 'red');
//       console.log(move1);

//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
