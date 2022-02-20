'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const debounce = (cb, wait) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        return new Promise(resolve => {
            timer = setTimeout(() => resolve(cb(...args)), wait);
        });
    };
};

const isClient = typeof window === 'object';
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
 * @prop {number} [maxSize] - Chart maximum size
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
const PieChart = (props) => {
    const { className, data, debounceTime = 50, donutHoleClassName, donutHoleColor = '#ffffff', donutSegmentClassName, fontSize, maxSize, minSize, parentRef, size: sizeProp, text, textClassName, textColor, textGroupClassName, textSvgObjectClassName, } = props;
    const [size, setSize] = React.useState(sizeProp || 0);
    const totalDataValue = React.useMemo(() => data === null || data === void 0 ? void 0 : data.reduce((current, next) => current + next.value, 0), [data]) || 0;
    /* main size of chart */
    const viewBox = `0 0 ${size} ${size}`;
    const halfSize = size / 2;
    /* chart radius */
    const radiusCalc = (size - halfSize) / 2;
    const radius = radiusCalc >= 0 ? radiusCalc : 0;
    /* chart center circle radius */
    const holeRadius = size * 0.275;
    /* 'strokeDasharray' of segments */
    const strokeDasharray = radius * Math.PI * 2;
    /* prevent unnecessary re-renders */
    const updateSizeDebounced = debounce((newSize) => {
        if (newSize !== size) {
            setSize(newSize);
        }
    }, debounceTime);
    const updateSize = (newSize) => {
        if (debounceTime === 0) {
            setSize(newSize);
        }
        else {
            updateSizeDebounced(newSize);
        }
    };
    const handleResize = React.useCallback(() => {
        const { offsetHeight: h, offsetWidth: w, } = (parentRef === null || parentRef === void 0 ? void 0 : parentRef.current) || {};
        if (typeof h === 'number' && typeof w === 'number') {
            if (h === w) {
                updateSize(w);
                return;
            }
            let s = 0;
            if (h > 0 && w > 0) {
                s = h > w ? w : h;
            }
            else if (h) {
                s = h;
            }
            else if (w) {
                s = w;
            }
            if (s) {
                if (minSize && (minSize >= s)) {
                    updateSize(minSize);
                }
                else if (maxSize && (maxSize <= s)) {
                    updateSize(maxSize);
                }
                else {
                    updateSize(s);
                }
            }
            else if (minSize) {
                updateSize(minSize);
            }
        }
    }, [parentRef]);
    React.useEffect(() => {
        if (isClient && !sizeProp) {
            handleResize() /* sets initial size */;
            window.addEventListener('resize', handleResize) /* re-renders svg if parent container resized */;
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isClient]);
    return (React__default["default"].createElement("svg", { "aria-labelledby": "beers-title beers-desc", className: className, role: "img", style: {
            display: 'flex',
            height: `${size || minSize || 0}px`,
            width: `${size || minSize || 0}px`,
        }, viewBox: viewBox }, data === null || data === void 0 ? void 0 :
        data.map((item, i) => {
            var _a;
            const { color, segmentId, value, } = item;
            /* sum of previous segments values */
            const prevTotal = ((_a = data === null || data === void 0 ? void 0 : data.filter((_, index) => index < i)) === null || _a === void 0 ? void 0 : _a.reduce((c, n) => c + n.value, 0)) || 0;
            /* proportion of previous segments */
            const prevPercentage = prevTotal / totalDataValue;
            /* start angle of current segment */
            const angle = 360 * prevPercentage;
            /* proportion of current segment */
            const percentage = value / totalDataValue;
            /* 'strokeDashoffset' of current segment */
            const strokeDashoffset = strokeDasharray - strokeDasharray * percentage;
            /* 'rotation' of current segment */
            const transform = `rotate(${-90 + angle} ${halfSize} ${halfSize})`;
            return (React__default["default"].createElement("circle", { className: donutSegmentClassName, cx: halfSize, cy: halfSize, fill: "transparent", key: segmentId, r: radius, stroke: color, strokeDasharray: strokeDasharray, strokeDashoffset: strokeDashoffset, strokeWidth: halfSize, style: { position: 'relative' }, transform: transform }));
        }),
        text && (React__default["default"].createElement("circle", { className: donutHoleClassName, cx: halfSize, cy: halfSize, fill: donutHoleColor, r: holeRadius })),
        text && (React__default["default"].createElement("g", { className: textGroupClassName },
            React__default["default"].createElement("foreignObject", { className: textSvgObjectClassName, height: size, width: size, x: "0", y: "0" },
                React__default["default"].createElement("div", { className: textClassName, style: {
                        alignItems: 'center',
                        color: textColor || '#000000',
                        display: 'flex',
                        fontSize: fontSize || `${size / 6}px`,
                        height: '100%',
                        justifyContent: 'center',
                        width: '100%',
                    } }, text))))));
};

module.exports = PieChart;
