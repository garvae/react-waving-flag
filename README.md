
### Description
Lightweight react "pie" chart.
 
### Features
 - responsive (svg re-renders when it's needed)
 - ability to show some text in center "donut hole"
 - ready for TypeScript

---

### Variants

<p align="center">
    <img src="https://github.com/garvae/react-pie-chart/raw/main/public/github/variants.png" alt="react-pie-chart variants" width="100%" height="auto">
</p>  


### Notes

> You can choose if you want to resize the chart based on the parent size or if you want to set the size manually.
> If you want `resizable` chart, you must be sure the parent container does not have zero width and height.
> If you want to set the size manually just add the `size` property

### Installation

```sh
npm install @garvae/reat-pie-hart
```
or
```sh
yarn add @garvae/reat-pie-hart
```


### Properties

#### Required

`Data` - an array of objects with properties described below:

| Name | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| color | <code>string</code> | - | + | Color of chart segment. Must be a CSS 'color' type |
| order | <code>number</code> | - | + | Order of segment in pie chart map |
| segmentId | <code>string</code> | - | + | Unique id of chart segment |
| value | <code>number</code> | - | + | Value of segment |

#### Required if `size` prop isn't given

`parentRef` - <code>React.RefObject.&lt;HTMLDivElement&gt;</code> - Ref to container element

#### Required if `parentRef` prop isn't given

`size` - <code>number</code> - Chart size. Chart element will not be resizable when this property is given

#### Optional

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| className | <code>string</code> |  | SVG className |
| donutHoleClassName | <code>string</code> |  | Center circle className |
| donutHoleColor | <code>string</code> | <code>&quot;&#x27;#ffffff&#x27;&quot;</code> | Center circle color |
| donutSegmentClassName | <code>string</code> |  | Circle segment className |
| fontSize | <code>string</code> |  | Center circle text size. Must be a CSS 'fontSize' type: '<number>px' |
| minSize | <code>number</code> |  | Chart minimum size |
| text | <code>string</code> |  | Center circle text. Must be short enough to fit in the center of the chart. Center circle will not be shown when this property is not given. |
| textClassName | <code>string</code> |  | ClassName of the <div> element that wraps center circle text |
| textColor | <code>string</code> |  | Center circle text color |
| textGroupClassName | <code>string</code> |  | <g> (group) element that wraps center circle text |
| textSvgObjectClassName | <code>string</code> |  | <foreignObject> element that wraps center circle text |
| debounceTime | <code>number</code> | <code>50</code> | Prevents unnecessary re-renders. Default 50ms. Debounce disabled when 'debounceTime' = 0 or when 'size' property value is given | 

---

### Example

```
import ChartPie from '@garvae/react-pie-chart'

const DATA = [
    {
        color: '#e74949',
        order: 1,
        segmentId: '001',
        value: 12,
    },
    {
        color: '#49bae7',
        order: 2,
        segmentId: '002',
        value: 17,
    },
    {
        color: '#e7a849',
        order: 3,
        segmentId: '003',
        value: 18,
    },
    {
        color: '#e76e49',
        order: 4,
        segmentId: '004',
        value: 9,
    },
    {
        color: '#78e749',
        order: 5,
        segmentId: '005',
        value: 30,
    }
]

const App = () => {
    const ref = React.useRef<HTMLDivElement>(null)

    return (
      <div
       ref={ref}
       // here we use parent container size to resize chart depends on it 
       style={{
              display: 'flex',
              width: '600px',
              height: '600px',
          }}
      >
          <ChartPie data={DATA} parentRef={ref}/>
      </div>
    );
};
```

## Dependencies

- [use-debounce](https://github.com/xnimorz/use-debounce) - Prevents unnecessary re-renders

## Author

🙋‍♂️ **Vova_Garvae**

- Facebook: [@garvae](https://www.facebook.com/garvae)
- LinkedIn: [@garvae](https://linkedin.com/in/garvae)
- Twitter: [@garvae](https://twitter.com/garvae)
- Github: [@garvae](https://github.com/garvae)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://www.github.com/garvae/chameltone/issues). You can also take a look at the [contributing guide](https://wwwhub.com/garvae/chameltone/raw/master/CONTRIBUTING.md).

## Show your support

Give a  ⭐ and your ❤️ if this project helped you!

<a href="https://www.patreon.com/garvae">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

<br/>
<br/>

❤️️ <https://ko-fi.com/garvae>

<br/>

❤️️ <https://pay.cloudtips.ru/p/859caa2a>

