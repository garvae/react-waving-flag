'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var useDebouncedCallback = _interopDefault(require('use-debounce/esm/useDebouncedCallback'));

var isClient = typeof window === 'object';
/**
 * @component
 *
 *
 * @typedef TDataItem - Type of chart data item (segment)
 * @type {Object}
 * @prop {string} color - REQUIRED. Color of chart segment. Must be a CSS 'color' type
 * @prop {number} order - REQUIRED. Order of segment in pie chart map
 * @prop {string} segmentId - REQUIRED. Unique id of chart segment
 * @prop {number} value - REQUIRED. Value of segment
 *
 * @typedef TPieChartProps - Type of chart data item (segment)
 * @type {Object}
 * @prop {string} [className] - SVG className
 * @prop {Array.<TDataItem>} data - REQUIRED. Pie chart data
 * @prop {string} [donutHoleClassName] - Center circle className
 * @prop {string} [donutHoleColor='#ffffff'] - Center circle color
 * @prop {string} [donutSegmentClassName] - Circle segment className
 * @prop {string} [fontSize] - Center circle text size. Must be a CSS 'fontSize' type: '<number>px'
 * @prop {number} [minSize] - Chart minimum size
 * @prop {React.RefObject<HTMLDivElement>} [parentRef] - REQUIRED if 'size' prop isn't given. Ref to container element
 * @prop {string} [text]
 * @prop {string} [textClassName] - ClassName of the <div> element that wraps center circle text
 * @prop {string} [textColor] - Center circle text color
 * @prop {string} [textGroupClassName] - <g> (group) element that wraps center circle text
 * @prop {string} [textSvgObjectClassName] - <foreignObject> element that wraps center circle text
 *
 *  // Debounce disabled when 'debounceTime' = 0
 *  // or when 'size' property value is given
 * @prop {number} [debounceTime=50] - Prevent unnecessary re-renders. Default 50ms.
 *
 *
 *  // Center circle text. Must be short enough to fit in the center of the chart.
 *  // Center circle will not be shown when this property is not given.
 * @prop {number} [size] - REQUIRED if 'parentRef' prop isn't given. Chart size. Chart element will not be resizable when this property is given.
 *
 *
 * @param {TPieChartProps} props
 * @returns {JSX.Element} Returns <svg> chart.
 *
 * @example
 * ```
 * const App = () => {
 *   const ref = React.useRef<HTMLDivElement>(null)
 *
 *   return (
 *     <div ref={ref}>
 *         <ChartPie data={DATA} parentRef={ref}/>
 *     </div>
 *   );
 * };
 * ```
 */

var PieChart = function PieChart(props) {
  var className = props.className,
      data = props.data,
      _props$debounceTime = props.debounceTime,
      debounceTime = _props$debounceTime === void 0 ? 50 : _props$debounceTime,
      donutHoleClassName = props.donutHoleClassName,
      _props$donutHoleColor = props.donutHoleColor,
      donutHoleColor = _props$donutHoleColor === void 0 ? '#ffffff' : _props$donutHoleColor,
      donutSegmentClassName = props.donutSegmentClassName,
      fontSize = props.fontSize,
      minSize = props.minSize,
      parentRef = props.parentRef,
      sizeProp = props.size,
      text = props.text,
      textClassName = props.textClassName,
      textColor = props.textColor,
      textGroupClassName = props.textGroupClassName,
      textSvgObjectClassName = props.textSvgObjectClassName;

  var _useState = React.useState(sizeProp || 0),
      size = _useState[0],
      setSize = _useState[1];

  var totalDataValue = React.useMemo(function () {
    return data == null ? void 0 : data.reduce(function (current, next) {
      return current + next.value;
    }, 0);
  }, [data]) || 0;
  /* main size of chart */

  var viewBox = "0 0 " + size + " " + size;
  var halfSize = size / 2;
  /* chart radius */

  var radiusCalc = (size - halfSize) / 2;
  var radius = radiusCalc >= 0 ? radiusCalc : 0;
  /* chart center circle radius */

  var holeRadius = size * 0.275;
  /* 'strokeDasharray' of segments */

  var strokeDasharray = radius * Math.PI * 2;
  /* prevent unnecessary re-renders */

  var updateSizeDebounced = useDebouncedCallback(function (newSize) {
    if (newSize !== size) {
      setSize(newSize);
    }
  }, debounceTime);

  var updateSize = function updateSize(newSize) {
    if (debounceTime === 0) {
      setSize(newSize);
    } else {
      updateSizeDebounced(newSize);
    }
  };

  var handleResize = React.useCallback(function () {
    var _ref = (parentRef == null ? void 0 : parentRef.current) || {},
        h = _ref.offsetHeight,
        w = _ref.offsetWidth;

    if (typeof h === 'number' && typeof w === 'number') {
      if (h === w) {
        updateSize(w);
        return;
      }

      var s = 0;

      if (h > 0 && w > 0) {
        s = h > w ? w : h;
      } else if (h) {
        s = h;
      } else if (w) {
        s = w;
      }

      if (s) {
        if (minSize && minSize >= s) {
          updateSize(minSize);
        } else {
          updateSize(s);
        }
      } else if (minSize) {
        updateSize(minSize);
      }
    }
  }, [parentRef]);
  React.useEffect(function () {
    if (isClient && !sizeProp) {
      handleResize()
      /* sets initial size */
      ;
      window.addEventListener('resize', handleResize)
      /* re-renders svg if parent container resized */
      ;
      return function () {
        return window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);
  return React__default.createElement("svg", {
    "aria-labelledby": "beers-title beers-desc",
    className: className,
    role: "img",
    style: {
      display: 'flex',
      height: (size || minSize || 0) + "px",
      width: (size || minSize || 0) + "px"
    },
    viewBox: viewBox
  }, data == null ? void 0 : data.map(function (item, i) {
    var _data$filter;

    var color = item.color,
        segmentId = item.segmentId,
        value = item.value;
    /* sum of previous segments values */

    var prevTotal = (data == null ? void 0 : (_data$filter = data.filter(function (_, index) {
      return index < i;
    })) == null ? void 0 : _data$filter.reduce(function (c, n) {
      return c + n.value;
    }, 0)) || 0;
    /* proportion of previous segments */

    var prevPercentage = prevTotal / totalDataValue;
    /* start angle of current segment */

    var angle = 360 * prevPercentage;
    /* proportion of current segment */

    var percentage = value / totalDataValue;
    /* 'strokeDashoffset' of current segment */

    var strokeDashoffset = strokeDasharray - strokeDasharray * percentage;
    /* 'rotation' of current segment */

    var transform = "rotate(" + (-90 + angle) + " " + halfSize + " " + halfSize + ")";
    return React__default.createElement("circle", {
      className: donutSegmentClassName,
      cx: halfSize,
      cy: halfSize,
      fill: "transparent",
      key: segmentId,
      r: radius,
      stroke: color,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      strokeWidth: halfSize,
      style: {
        position: 'relative'
      },
      transform: transform
    });
  }), text && React__default.createElement("circle", {
    className: donutHoleClassName,
    cx: halfSize,
    cy: halfSize,
    fill: donutHoleColor,
    r: holeRadius
  }), text && React__default.createElement("g", {
    className: textGroupClassName
  }, React__default.createElement("foreignObject", {
    className: textSvgObjectClassName,
    height: size,
    width: size,
    x: "0",
    y: "0"
  }, React__default.createElement("div", {
    className: textClassName,
    style: {
      alignItems: 'center',
      color: textColor || '#000000',
      display: 'flex',
      fontSize: fontSize || size / 6 + "px",
      height: '100%',
      justifyContent: 'center',
      width: '100%'
    }
  }, text))));
};

exports.default = PieChart;
//# sourceMappingURL=react-pie-chart.cjs.development.js.map
