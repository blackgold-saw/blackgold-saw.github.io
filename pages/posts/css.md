---
layout: post
title: CSS 学习笔记
date: 2023-07-26 14:49:20
---

## @media响应式适配

**PC端设备屏幕的宽度**

页面宽度大于1000px（>=1000）且小于1200px（<=1200）的时候执行下面的CSS（实际刚好“>=1000”或“<=1200”的都执行）

```
@media screen and (min-width:1000px) and (max-width: 1200px){
    .cont_li{
        width: 50px;
        margin-left: 7px;
        padding-left: 9px;
    }
}

```

**PC屏幕自适应CSS3**

```
/*当页面宽度大于1000px且小于1200px的时候执行，1000-1200*/
@media screen and (min-width:1000px) and (max-width: 1200px){
    body{
        font-size:16px
    }
}
/*当页面宽度大于1280px且小于1366px的时候执行,1280-1366*/
@media screen and (min-width:1280px) and (max-width: 1366px){
    body{
        font-size:18px
    }
}
/*当页面宽度大于1440px且小于1600px的时候执行,1440-1600*/
@media screen and (min-width:1440px) and (max-width:1600px){
    body{
        font-size:20px
    }
}
/*当页面宽度大于1680px且小于1920px的时候执行,1680-1920*/
@media screen and (min-width:1680px) and (max-width:1920px){
    body{
        font-size:22px
    }
}
```

**移动端设备屏幕的宽度**

移动端屏幕自适应CSS3代码

```
@media screen and (min-width:320px) and (max-width:360px){
    body{
        font-size: 12px;
    }
}
@media screen and (min-width:360px) and (max-width:390px){
    body{
        font-size: 13px;
    }
}
@media screen and (min-width:390px) and (max-width:460px){
    body{
        font-size: 14px;
    }
}
 
@media screen and (min-width:320px) and (max-width:460px){
    body{
        font-size: 12.5px;
    }
}
```