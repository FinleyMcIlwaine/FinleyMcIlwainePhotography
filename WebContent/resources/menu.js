var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

document.addEventListener("DOMContentLoaded", function () {
  alert('test');
  var domContainer = document.querySelector('#reactContainer');

  var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Button);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
        _this.props.onClickFunction(_this.props.incrementValue);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Button, [{
      key: 'render',
      value: function render() {
        return React.createElement('button', { onClick: this.handleClick }, '+', this.props.incrementValue);
      }
    }]);

    return Button;
  }(React.Component);

  var Result = function Result(props) {
    return React.createElement('div', null, props.counterValue);
  };

  var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App() {
      var _ref2;

      var _temp2, _this2, _ret2;

      _classCallCheck(this, App);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = { counter: 0 }, _this2.incrementCounter = function (amount) {
        _this2.setState(function (prevState) {
          return { counter: prevState.counter + amount };
        });
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        return React.createElement('div', null, React.createElement(Button, { incrementValue: 1, onClickFunction: this.incrementCounter }), React.createElement(Button, { incrementValue: 5, onClickFunction: this.incrementCounter }), React.createElement(Button, { incrementValue: 10, onClickFunction: this.incrementCounter }), React.createElement(Button, { incrementValue: 100, onClickFunction: this.incrementCounter }), React.createElement(Result, { counterValue: this.state.counter }));
      }
    }]);

    return App;
  }(React.Component);

  ;

  ReactDOM.render(React.createElement(App, null), domContainer);
});

console.log('loaded');