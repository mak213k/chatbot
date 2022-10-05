'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function Api(url) {
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

    _classCallCheck(this, Api);

    this.url = url;
    this.param = param;
  }

  _createClass(Api, [{
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this.url = url;
    }
  }, {
    key: "getParam",
    value: function getParam() {
      return this.param;
    }
  }, {
    key: "setParam",
    value: function setParam(param) {
      this.param = param;
    }
  }, {
    key: "showRequestApiGet",
    value: function showRequestApiGet() {
      var parans = '';
      var count = 0;

      for (var _i = 0, _Object$entries = Object.entries(this.param); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (count == 0) {
          parans = '?' + key + '=' + value;
        } else {
          parans += '&' + key + '=' + value;
        }

        count++;
      }

      var request = require('request');

      request.get({
        url: this.url + parans,
        json: true,
        headers: {
          'User-Agent': 'request'
        }
      }, function (err, res, data) {
        if (err) {
          console.log('Error:', err);
        } else if (res.statusCode !== 200) {
          console.log('Status:', res.statusCode);
        } else {
          console.log(data["Time Series (Daily)"]['2022-09-30']);
        }
      });
    }
  }]);

  return Api;
}();