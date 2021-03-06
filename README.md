# react-waving-flag

### Project description
A simple animated waving flag from a jpg/png image
 
### Features
 - lightweight
 - can be shown from both left and right sides of the screen
 - animated with CSS
 - ready for TypeScript

> The UI of the component assumes its use from the edge of the container (screen)

---

<p align="center">
    <img src="https://raw.githubusercontent.com/garvae/react-waving-flag/master/public/github/demo_screen.gif" alt="demo screen" width="100%" height="auto">
</p>  

### Installation

```sh
npm install @garvae/react-waving-flag
```
or
```sh
yarn add @garvae/react-waving-flag
```


### Properties (Optional)

| Name |  Type  | Default | Required | Description |
| --- |  ---  | --- | --- | --- |
| animationSpeed | <code> number </code> | 1 | - | Speed of the "waving" animation (seconds) |
| boxShadowColor | <code> string </code> | '#f8f8f8' | - | CSS color property. Flag shadow color. |
| className | <code> string </code> |  | - | Container className |
| curvature | <code> number </code> | 10 | - | Wave distortion degree. The smaller the value, the smoother the wave. |
| flag | <code> string </code> |  | - | JPG/PNG flag picture URL |
| flagContainerClassName | <code> string </code> |  | - | Flag container className |
| fromLeft | <code> boolean </code> | true | - | Set this param to "false" if you want to show the flag from right side of screen |
| height | <code> number </code> | 200 | - | Flag height |
| isShadow | <code> boolean </code> | true | - | Option to disable flag shadow |
| width | <code> number </code> | 300 | - | Flag width |

---

### Example
```
const App = () => {

  // ...

  return (
    <div>
      <WavingFlag
        flag="https://external-preview.redd.it/QVS6D1FlDcpx7byaow-LyO4GpezIlepIkozbzwqtFOY.png?auto=webp&s=d60d5e9953842259ade3c425c55354f6651029f4"
        height={200}
        width={300}
      />
    </div>
  );
};
```

## Author

🙋‍♂️ **Vova_Garvae**

- Facebook: [@garvae](https://www.facebook.com/garvae)
- LinkedIn: [@garvae](https://linkedin.com/in/garvae)
- Twitter: [@vgarvae](https://twitter.com/vgarvae)
- Github: [@garvae](https://github.com/garvae)


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://www.github.com/garvae/react-waving-flag/issues).


