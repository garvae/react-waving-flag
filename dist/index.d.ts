export = PieChart;
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
declare function PieChart(props: TPieChartProps): JSX.Element;
declare namespace PieChart {
    export { TDataItem, TPieChartProps };
}
/**
 * - Type of chart data item (segment)
 */
type TPieChartProps = {
    /**
     * - SVG className
     */
    className?: string;
    /**
     * - REQUIRED. Pie chart data
     */
    data: Array<TDataItem>;
    /**
     * - Center circle className
     */
    donutHoleClassName?: string;
    /**
     * - Center circle color
     */
    donutHoleColor?: string;
    /**
     * - Circle segment className
     */
    donutSegmentClassName?: string;
    /**
     * - Center circle text size. Must be a CSS 'fontSize' type: '<number>px'
     */
    fontSize?: string;
    /**
     * - Chart maximum size
     */
    maxSize?: number;
    /**
     * - Chart minimum size
     */
    minSize?: number;
    /**
     * - REQUIRED if 'size' prop isn't given. Ref to container element
     */
    parentRef?: React.RefObject<HTMLDivElement>;
    text?: string;
    /**
     * - ClassName of the <div> element that wraps center circle text
     */
    textClassName?: string;
    /**
     * - Center circle text color
     */
    textColor?: string;
    /**
     * - <g> (group) element that wraps center circle text
     */
    textGroupClassName?: string;
    /**
     * - <foreignObject> element that wraps center circle text
     *
     * // Debounce disabled when 'debounceTime' = 0
     * // or when 'size' property value is given
     */
    textSvgObjectClassName?: string;
    /**
     * - Prevent unnecessary re-renders. Default 50ms.
     *
     *
     * // Center circle text. Must be short enough to fit in the center of the chart.
     * // Center circle will not be shown when this property is not given.
     */
    debounceTime?: number;
    /**
     * - REQUIRED if 'parentRef' prop isn't given. Chart size. Chart element will not be resizable when this property is given.
     */
    size?: number;
};
/**
 * - Type of chart data item (segment)
 */
type TDataItem = {
    /**
     * - REQUIRED. Color of chart segment. Must be a CSS 'color' type
     */
    color: string;
    /**
     * - REQUIRED. Order of segment in pie chart map
     */
    order: number;
    /**
     * - REQUIRED. Unique id of chart segment
     */
    segmentId: string;
    /**
     * - REQUIRED. Value of segment
     */
    value: number;
};
import React = require("react");
