# DEPRECATED

<br/>

⛔ **This package has been deprecated** and is no longer supported
because the solutions used in this package do not meet quality standards
and are not efficient enough to implement such tasks.

<br/>

<hr/>


# react-waving-flag

A simple animated waving flag from a jpg/png image


---

<p align="center">
    <img src="https://github.com/garvae/react-waving-flag/blob/master/public/github/gh-cover.svg?raw=true" alt="react-waving-flag cover" width="100%" height="auto">
</p> 

---

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


## 🤝 Contributions

🤝 Contributions, issues and feature requests are welcome! <br/>
Feel free to check [issues page][issue] and [pull request page][pr].

❤️ **Give a** ⭐ **if you like this project!**

<br/>

## 📞 Contact me

### 🌐 [Contact page][garvae]

### 🔳 QR code

<div style="background-color: white; display: inline-block; margin-top: 2em; margin-bottom: 2em">
    <img src="https://github.com/garvae/assets/blob/master/assets/img/garvae-contacts.png?raw=true" alt="contact me" width="300px" height="300px">
</div>

### 🔗 Links

- [**E-mail**][email]
- [**Telegram**][telegram]
- [**Facebook**][facebook]
- [**Instagram**][instagram]
- [**LinkedIn**][linkedin]
- [**GitHub**][github]

<br/>

## 🚀 Mentoring

**If you want to grow** 🚀 **fast in front-end development - [contact me!][garvae]**  🙋‍♂

<br/>

## 📄 License

[See license in the "**LICENCE**" file][license]

[//]: # (------------------------------------------------------------------)
[//]: # (------------------------- Document links -------------------------)
[//]: # (------------------------------------------------------------------)

[//]: # (--------------------------- repo links ---------------------------)



[//]: # (-------------------------- common links --------------------------)

[issue]:https://github.com/garvae/react-waving-flag/issues
[pr]:https://github.com/garvae/react-waving-flag/pulls
[repo]:https://github.com/garvae/react-waving-flag
[license]:https://github.com/garvae/react-waving-flag/blob/master/LICENSE?raw=true

[//]: # (---------------------------- contacts ----------------------------)

[garvae]:https://sprd.li/4wr38watys
[email]:vgarvae@gmail.com
[telegram]:https://t.me/garvae
[facebook]:https://www.facebook.com/garvae
[instagram]:https://www.instagram.com/garvae
[linkedin]:https://linkedin.com/in/garvae
[github]:https://github.com/garvae

[//]: # (------------------------------------------------------------------)
[//]: # (------------------------------------------------------------------)
