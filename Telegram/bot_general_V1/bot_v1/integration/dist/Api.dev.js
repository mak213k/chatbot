'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports =
/*#__PURE__*/
function () {
  function Api(url, param) {
    _classCallCheck(this, Api);

    this.url = url;

    if (_typeof(this.param) !== undefined) {
      this.param = param;
    }
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
    key: "mountUrlGet",
    value: function mountUrlGet() {
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

      return this.url + parans;
    }
  }, {
    key: "showRequestApiGet",
    value: function showRequestApiGet() {
      var parans = this.mountUrlGet();

      var axios = require('axios');

      axios.get(parans).then(function (response) {
        console.log(response.data["Time Series (Daily)"]['2022-09-30']);
      })["catch"](function (error) {
        console.log(error);
      }).then(function () {
        console.log("Finalizando o comando");
      });
    }
  }, {
    key: "showRequestApiGetOld",
    value: function showRequestApiGetOld() {
      var parans = this.mountUrlGet();

      var request = require('request');

      request.get({
        url: parans,
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
  }, {
    key: "showRequestApiPost",
    value: function showRequestApiPost() {
      axios.post('', {}).then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }]);

  return Api;
}();