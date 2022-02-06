import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDebouncedCallback } from 'use-debounce';

export type TDataItem = {
  color: string;
  order: number;
  segmentId: string;
  value: number;
};

export type TPieChartCommonProps = {
  className?: string;
  data: TDataItem[];
  debounceTime?: number;
  donutHoleClassName?: string;
  donutHoleColor?: string;
  donutSegmentClassName?: string;
  fontSize?: string;
  minSize?: number;
  text?: string;
  textClassName?: string;
  textColor?: string;
  textGroupClassName?: string;
  textSvgObjectClassName?: string;
};

export type TPieChartWithRefProps = TPieChartCommonProps & {
  parentRef?: never;
  size: number;
};

export type TPieChartWithNoRefProps = TPieChartCommonProps & {
  parentRef: React.RefObject<HTMLDivElement>;
  size?: never;
};

export type TPieChartProps = TPieChartWithRefProps | TPieChartWithNoRefProps;

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
export const PieChart = (props: TPieChartProps): JSX.Element => {

  const {
    className,
    data,
    debounceTime = 50,
    donutHoleClassName,
    donutHoleColor = '#ffffff',
    donutSegmentClassName,
    fontSize,
    minSize,
    parentRef,
    size: sizeProp,
    text,
    textClassName,
    textColor,
    textGroupClassName,
    textSvgObjectClassName,
  } = props;

  const [ size, setSize ] = useState(sizeProp || 0);

  const totalDataValue = useMemo(() => data?.reduce((current, next) => current + next.value, 0), [ data ]) || 0;

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
  const updateSizeDebounced = useDebouncedCallback((newSize: number) => {
    if (newSize !== size){
      setSize(newSize);
    }
  }, debounceTime);

  const updateSize = (newSize: number) => {
    if (debounceTime === 0){
      setSize(newSize);
    } else {
      updateSizeDebounced(newSize);
    }
  };

  const handleResize = useCallback(() => {
    const {
      offsetHeight: h,
      offsetWidth: w,
    } = parentRef?.current || {};

    if (typeof h === 'number' && typeof w === 'number') {

      if (h === w){
        updateSize(w);
        return;
      }

      let s = 0;

      if (h > 0 && w > 0) {
        s = h > w ? w : h;
      } else if (h) {
        s = h;
      } else if (w) {
        s = w;
      }

      if (s){
        if (minSize && (minSize >= s)) {
          updateSize(minSize);
        } else {
          updateSize(s);
        }
      } else if (minSize){
        updateSize(minSize);
      }

    }
  }, [ parentRef ]);

  useEffect(() => {
    if (isClient && !sizeProp) {
      handleResize() /* sets initial size */;

      window.addEventListener('resize', handleResize) /* re-renders svg if parent container resized */;
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [ isClient ]);

  return (
    <svg
      aria-labelledby="beers-title beers-desc"
      className={className}
      role="img"
      style={
        {
          display: 'flex',
          height: `${size || minSize || 0}px`,
          width: `${size || minSize || 0}px`,
        }
      }
      viewBox={viewBox}
    >
      {
        data?.map((item, i) => {
          const {
            color,
            segmentId,
            value,
          } = item;

          /* sum of previous segments values */
          const prevTotal = data?.filter((_, index) => index < i)?.reduce((c, n) => c + n.value, 0) || 0;
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

          return (
            <circle
              className={donutSegmentClassName}
              cx={halfSize}
              cy={halfSize}
              fill="transparent"
              key={segmentId}
              r={radius}
              stroke={color}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeWidth={halfSize}
              style={{ position: 'relative' }}
              transform={transform}
            />
          );
        })
      }

      {
        text && (
          <circle
            className={donutHoleClassName}
            cx={halfSize}
            cy={halfSize}
            fill={donutHoleColor}
            r={holeRadius}
          />
        )
      }

      {
        text && (
          <g className={textGroupClassName}>
            <foreignObject
              className={textSvgObjectClassName}
              height={size}
              width={size}
              x="0"
              y="0"
            >
              <div
                className={textClassName}
                style={
                  {
                    alignItems: 'center',
                    color: textColor || '#000000',
                    display: 'flex',
                    fontSize: fontSize || `${size / 6}px`,
                    height: '100%',
                    justifyContent: 'center',
                    width: '100%',
                  }
                }
              >
                {text}
              </div>
            </foreignObject>
          </g>
        )
      }
    </svg>
  );
};
