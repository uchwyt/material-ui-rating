"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _orange = _interopRequireDefault(require("@material-ui/core/colors/orange"));

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _StarBorder = _interopRequireDefault(require("@material-ui/icons/StarBorder"));

var _StarHalf = _interopRequireDefault(require("@material-ui/icons/StarHalf"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)({
  root: {
    padding: 0,
    width: 'auto',
    height: 'auto'
  },
  tooltip: {
    display: 'inline-block'
  },
  icon: {
    color: _orange.default.A700
  },
  disabled: {
    color: _grey.default[900]
  },
  disabledPointer: {
    pointerEvents: 'none'
  }
});

var Rating = function Rating(_ref) {
  var value = _ref.value,
      className = _ref.className,
      itemStyle = _ref.itemStyle,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      readOnly = _ref.readOnly,
      max = _ref.max,
      props = _objectWithoutProperties(_ref, ["value", "className", "itemStyle", "disabled", "onChange", "readOnly", "max"]);

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      hoverValue = _useState2[0],
      setHoverValue = _useState2[1];

  var classes = useStyles();

  var renderIcon = function renderIcon(i) {
    var filled = i <= Math.ceil(value);
    var hovered = i <= Math.ceil(hoverValue);
    var half = i === Math.ceil(value) && i > Math.floor(value);

    if (hovered && !filled || !hovered && filled) {
      return props.iconHoveredRenderer ? props.iconHoveredRenderer(_objectSpread({}, props, {
        index: i
      })) : props.iconHovered || _react.default.createElement(_StarBorder.default, {
        classes: {
          root: (0, _clsx.default)(props.iconClass, classes.icon)
        }
      });
    } else if (filled && !half) {
      return props.iconFilledRenderer ? props.iconFilledRenderer(_objectSpread({}, props, {
        index: i
      })) : props.iconFilled || _react.default.createElement(_Star.default, {
        classes: {
          root: (0, _clsx.default)(props.iconClass, classes.icon)
        }
      });
    } else if (filled && half) {
      return props.iconHalfRenderer ? props.iconHalfRenderer(_objectSpread({}, props, {
        index: i
      })) : props.iconHalf || _react.default.createElement(_StarHalf.default, {
        classes: {
          root: (0, _clsx.default)(props.iconClass, classes.icon)
        }
      });
    } else {
      return props.iconNormalRenderer ? props.iconNormalRenderer(_objectSpread({}, props, {
        index: i
      })) : props.iconNormal || _react.default.createElement(_StarBorder.default, {
        classes: {
          root: (0, _clsx.default)(props.iconClass, classes.disabled)
        }
      });
    }
  };

  var getStars = _react.default.useMemo(function () {
    return function () {
      var tmp = [];

      var _loop = function _loop(i) {
        tmp.push(_react.default.createElement(_IconButton.default, {
          key: i,
          classes: {
            root: (0, _clsx.default)(classes.root, props.className)
          },
          disabled: disabled,
          style: itemStyle,
          onMouseEnter: function onMouseEnter() {
            return setHoverValue(i);
          },
          onMouseLeave: function onMouseLeave() {
            return setHoverValue(value);
          },
          onClick: function onClick() {
            if (!readOnly && onChange) {
              onChange(i);
            }
          }
        }, renderIcon(i)));
      };

      for (var i = 1; i <= max; i++) {
        _loop(i);
      }

      return tmp;
    };
  }, [max, disabled, itemStyle, value, readOnly, className]);

  var rating = getStars();
  return _react.default.createElement(_Tooltip.default, {
    id: "tooltip-icon",
    classes: {
      tooltip: (0, _clsx.default)(classes.tooltip, props.containerClass)
    },
    title: hoverValue || value,
    placement: props.tooltipPosition
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: (0, _clsx.default)(_defineProperty({}, classes.disabledPointer, disabled || readOnly)),
    style: props.style
  }, rating)));
};

Rating.defaultProps = {
  disabled: false,
  tooltipPosition: 'bottom',
  max: 5,
  readOnly: false,
  value: 0,
  fractions: 1
};
Rating.propTypes = {
  className: _propTypes.default.string,
  containerClass: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  iconFilled: _propTypes.default.node,
  iconHovered: _propTypes.default.node,
  iconNormal: _propTypes.default.node,
  iconHalf: _propTypes.default.node,
  tooltip: _propTypes.default.node,
  tooltipRenderer: _propTypes.default.func,
  tooltipPosition: _propTypes.default.string,
  tooltipStyles: _propTypes.default.object,
  iconFilledRenderer: _propTypes.default.func,
  iconHalfRenderer: _propTypes.default.func,
  iconHoveredRenderer: _propTypes.default.func,
  iconNormalRenderer: _propTypes.default.func,
  itemStyle: _propTypes.default.object,
  iconClass: _propTypes.default.string,
  max: _propTypes.default.number,
  onChange: _propTypes.default.func,
  readOnly: _propTypes.default.bool,
  style: _propTypes.default.object,
  value: _propTypes.default.number,
  fractions: _propTypes.default.number
};

var _default = _react.default.memo(Rating);

exports.default = _default;