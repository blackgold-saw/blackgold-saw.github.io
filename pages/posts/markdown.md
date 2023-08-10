---
layout: post
title: 【Markdown语法】字体颜色大小及文字底色设置（转载）
tags: ['Markdown']
categories: ['老师我想学习']
date: 2023-08-10 11:37:48
---


>本文转载自：<a href="https://blog.csdn.net/qq_43732429/article/details/108034518">【Markdown语法】字体颜色大小及文字底色设置</a> 

## 1. Markdown语法

``` markdown
<font face="黑体">黑体字</font>
<font face="微软雅黑">微软雅黑</font>
<font face="STCAIYUN">华文彩云</font>
<font color=blue>蓝色</font>
<font color=#008000>绿色</font>
<font color=Red>红色</font>
<font size=5>尺寸</font>
<font face="黑体" color=green size=5>黑体，绿色，尺寸为5（任意内容）</font>
```

效果如下：
<font face="黑体">黑体字</font><br />
<font face="微软雅黑">微软雅黑</font><br />
<font face="STCAIYUN">华文彩云</font><br />
<font color=blue>蓝色</font><br />
<font color=#008000>绿色</font><br />
<font color=Red>红色</font><br />
<font size=5>尺寸</font><br />
<font face="黑体" color=green size=5>黑体，绿色，尺寸为5（任意内容）</font><br />

-----

如果不需要改变输入内容的其他属性，比如加粗，斜体等，可以在内容前面加上`<font color=颜色>`即可。例如语句

``` markdown
<font color=LightSeaGreen>某一种绿色
```

效果如下：

<font color=LightSeaGreen>某一种绿色</font>

## 2. 一些常用的颜色

<font color=NavajoWhite>color=NavajoWhite</font><br />
<font color=Feldspar>color=Feldspar</font><br />
<font color=SandyBrown>color=SandyBrown</font><br />
<font color=LightSalmon>color=LightSalmon</font><br />
<font color=Salmon>color=Salmon</font><br />
<font color=LightCoral>color=LightCoral</font><br /><br />

<font color=Pink>color=Pink</font><br />
<font color=PaleVioletRed>color=PaleVioletRed</font><br />
<font color=HotPink>color=HotPink</font><br /><br />

<font color=silver>color=silver</font><br />
<font color=LightSlateGray>color=LightSlateGray</font><br />
<font color=SlateGray>color=SlateGray</font><br />
<font color=grey>color=grey</font><br />
<font color=RosyBrown>color=RosyBrown</font><br />
<font color=maroon>color=maroon</font><br /><br />

<font color=DarkSeaGreen>color=DarkSeaGreen</font><br />
<font color=LightSeaGreen>color=LightSeaGreen</font><br />
<font color=SeaGreen>color=SeaGreen</font><br /><br />

<font color=PowderBlue>color=PowderBlue</font><br />
<font color=LightSteelBlue>color=LightSteelBlue</font><br />
<font color=CadetBlue>color=CadetBlue</font><br />
<font color=navy>color=navy</font><br /><br />

<font color=Thistle>color=Thistle</font><br />
<font color=Plum>color=Plum</font><br />
<font color=MediumPurple>color=MediumPurple</font><br />
<font color=Purple>color=Purple</font><br /><br />

## 3. 文字底色

借助 table, tr, td 等表格标签的 bgcolor 属性来实现背景色。将那一整行看作一个表格，更改整个格子的背景色（bgcolor）。

**Markdown语法：**

``` markdown
<table><tr><td bgcolor=DarkSeaGreen>这里的背景色是：DarkSeaGreen，此处输入任意想输入的内容</td></tr></table>
```

效果如下：
<table><tr><td style="border:none;" bgcolor=DarkSeaGreen>这里的背景色是：DarkSeaGreen，此处输入任意想输入的内容</td></tr></table><br />
<table><tr><td style="border:none;" bgcolor=Beige>这里的背景色是：Beige，此处输入任意想输入的内容</td></tr></table><br />
<table><tr><td style="border:none;" bgcolor=MistyRose>这里的背景色是：MistyRose，此处输入任意想输入的内容</td></tr></table><br />
<table><tr><td style="border:none;" bgcolor=Gold>这里的背景色是：Gold，此处输入任意想输入的内容</td></tr></table><br />

## 附录：颜色列表

<table>
<th>颜色名</th>
<th>十六进制颜色值</th>
<th>颜色</th>
<tr><td><font color=AliceBlue>AliceBlue</font></td><td><font color=AliceBlue>#F0F8FF</font></td><td bgcolor=AliceBlue>rgb(240, 248, 255)</td></tr>
<tr><td><font color=AntiqueWhite>AntiqueWhite</font></td><td><font color=AntiqueWhite>#FAEBD7</font></td><td bgcolor=AntiqueWhite>rgb(250, 235, 215)</td></tr>
<tr><td><font color=Aqua>Aqua</font></td><td><font color=Aqua>#00FFFF</font></td><td bgcolor=Aqua>rgb(0, 255, 255)</td></tr>
<tr><td><font color=Aquamarine>Aquamarine</font></td><td><font color=Aquamarine>#7FFFD4</font></td><td bgcolor=Aquamarine>rgb(127, 255, 212)</td></tr>
<tr><td><font color=Azure>Azure</font></td><td><font color=Azure>#F0FFFF</font></td><td bgcolor=Azure>rgb(240, 255, 255)</td></tr>
<tr><td><font color=Beige>Beige</font></td><td><font color=Beige>#F5F5DC</font></td><td bgcolor=Beige>rgb(245, 245, 220)</td></tr>
<tr><td><font color=Bisque>Bisque</font></td><td><font color=Bisque>#FFE4C4</font></td><td bgcolor=Bisque>rgb(255, 228, 196)</td></tr>
<tr><td><font color=Black>Black</font></td><td><font color=Black>#000000</font></td><td bgcolor=Black>rgb(0, 0, 0)</td></tr>
<tr><td><font color=BlanchedAlmond>BlanchedAlmond</font></td><td><font color=BlanchedAlmond>#FFEBCD</font></td><td bgcolor=BlanchedAlmond>rgb(255, 235, 205)</td></tr>
<tr><td><font color=Blue>Blue</font></td><td><font color=Blue>#0000FF</font></td><td bgcolor=Blue>rgb(0, 0, 255)</td></tr>
<tr><td><font color=BlueViolet>BlueViolet</font></td><td><font color=BlueViolet>#8A2BE2</font></td><td bgcolor=BlueViolet>rgb(138, 43, 226)</td></tr>
<tr><td><font color=Brown>Brown</font></td><td><font color=Brown>#A52A2A</font></td><td bgcolor=Brown>rgb(165, 42, 42)</td></tr>
<tr><td><font color=BurlyWood>BurlyWood</font></td><td><font color=BurlyWood>#DEB887</font></td><td bgcolor=BurlyWood>rgb(222, 184, 135)</td></tr>
<tr><td><font color=CadetBlue>CadetBlue</font></td><td><font color=CadetBlue>#5F9EA0</font></td><td bgcolor=CadetBlue>rgb(95, 158, 160)</td></tr>
<tr><td><font color=Chartreuse>Chartreuse</font></td><td><font color=Chartreuse>#7FFF00</font></td><td bgcolor=Chartreuse>rgb(127, 255, 0)</td></tr>
<tr><td><font color=Chocolate>Chocolate</font></td><td><font color=Chocolate>#D2691E</font></td><td bgcolor=Chocolate>rgb(210, 105, 30)</td></tr>
<tr><td><font color=Coral>Coral</font></td><td><font color=Coral>#FF7F50</font></td><td bgcolor=Coral>rgb(255, 127, 80)</td></tr>
<tr><td><font color=CornflowerBlue>CornflowerBlue</font></td><td><font color=CornflowerBlue>#6495ED</font></td><td bgcolor=CornflowerBlue>rgb(100, 149, 237)</td></tr>
<tr><td><font color=Cornsilk>Cornsilk</font></td><td><font color=Cornsilk>#FFF8DC</font></td><td bgcolor=Cornsilk>rgb(255, 248, 220)</td></tr>
<tr><td><font color=Crimson>Crimson</font></td><td><font color=Crimson>#DC143C</font></td><td bgcolor=Crimson>rgb(220, 20, 60)</td></tr>
<tr><td><font color=Cyan>Cyan</font></td><td><font color=Cyan>#00FFFF</font></td><td bgcolor=Cyan>rgb(0, 255, 255)</td></tr>
<tr><td><font color=DarkBlue>DarkBlue</font></td><td><font color=DarkBlue>#00008B</font></td><td bgcolor=DarkBlue>rgb(0, 0, 139)</td></tr>
<tr><td><font color=DarkCyan>DarkCyan</font></td><td><font color=DarkCyan>#008B8B</font></td><td bgcolor=DarkCyan>rgb(0, 139, 139)</td></tr>
<tr><td><font color=DarkGoldenRod>DarkGoldenRod</font></td><td><font color=DarkGoldenRod>#B8860B</font></td><td bgcolor=DarkGoldenRod>rgb(184, 134, 11)</td></tr>
<tr><td><font color=DarkGray>DarkGray</font></td><td><font color=DarkGray>#A9A9A9</font></td><td bgcolor=DarkGray>rgb(169, 169, 169)</td></tr>
<tr><td><font color=DarkGreen>DarkGreen</font></td><td><font color=DarkGreen>#006400</font></td><td bgcolor=DarkGreen>rgb(0, 100, 0)</td></tr>
<tr><td><font color=DarkKhaki>DarkKhaki</font></td><td><font color=DarkKhaki>#BDB76B</font></td><td bgcolor=DarkKhaki>rgb(189, 183, 107)</td></tr>
<tr><td><font color=DarkMagenta>DarkMagenta</font></td><td><font color=DarkMagenta>#8B008B</font></td><td bgcolor=DarkMagenta>rgb(139, 0, 139)</td></tr>
<tr><td><font color=DarkOliveGreen>DarkOliveGreen</font></td><td><font color=DarkOliveGreen>#556B2F</font></td><td bgcolor=DarkOliveGreen>rgb(85, 107, 47)</td></tr>
<tr><td><font color=Darkorange>Darkorange</font></td><td><font color=Darkorange>#FF8C00</font></td><td bgcolor=Darkorange>rgb(255, 140, 0)</td></tr>
<tr><td><font color=DarkOrchid>DarkOrchid</font></td><td><font color=DarkOrchid>#9932CC</font></td><td bgcolor=DarkOrchid>rgb(153, 50, 204)</td></tr>
<tr><td><font color=DarkRed>DarkRed</font></td><td><font color=DarkRed>#8B0000</font></td><td bgcolor=DarkRed>rgb(139, 0, 0)</td></tr>
<tr><td><font color=DarkSalmon>DarkSalmon</font></td><td><font color=DarkSalmon>#E9967A</font></td><td bgcolor=DarkSalmon>rgb(233, 150, 122)</td></tr>
<tr><td><font color=DarkSeaGreen>DarkSeaGreen</font></td><td><font color=DarkSeaGreen>#8FBC8F</font></td><td bgcolor=DarkSeaGreen>rgb(143, 188, 143)</td></tr>
<tr><td><font color=DarkSlateBlue>DarkSlateBlue</font></td><td><font color=DarkSlateBlue>#483D8B</font></td><td bgcolor=DarkSlateBlue>rgb(72, 61, 139)</td></tr>
<tr><td><font color=DarkSlateGray>DarkSlateGray</font></td><td><font color=DarkSlateGray>#2F4F4F</font></td><td bgcolor=DarkSlateGray>rgb(47, 79, 79)</td></tr>
<tr><td><font color=DarkTurquoise>DarkTurquoise</font></td><td><font color=DarkTurquoise>#00CED1</font></td><td bgcolor=DarkTurquoise>rgb(0, 206, 209)</td></tr>
<tr><td><font color=DarkViolet>DarkViolet</font></td><td><font color=DarkViolet>#9400D3</font></td><td bgcolor=DarkViolet>rgb(148, 0, 211)</td></tr>
<tr><td><font color=DeepPink>DeepPink</font></td><td><font color=DeepPink>#FF1493</font></td><td bgcolor=DeepPink>rgb(255, 20, 147)</td></tr>
<tr><td><font color=DeepSkyBlue>DeepSkyBlue</font></td><td><font color=DeepSkyBlue>#00BFFF</font></td><td bgcolor=DeepSkyBlue>rgb(0, 191, 255)</td></tr>
<tr><td><font color=DimGray>DimGray</font></td><td><font color=DimGray>#696969</font></td><td bgcolor=DimGray>rgb(105, 105, 105)</td></tr>
<tr><td><font color=DodgerBlue>DodgerBlue</font></td><td><font color=DodgerBlue>#1E90FF</font></td><td bgcolor=DodgerBlue>rgb(30, 144, 255)</td></tr>
<tr><td><font color=Feldspar>Feldspar</font></td><td><font color=Feldspar>#D19275</font></td><td bgcolor=Feldspar>rgb(209, 146, 117)</td></tr>
<tr><td><font color=FireBrick>FireBrick</font></td><td><font color=FireBrick>#B22222</font></td><td bgcolor=FireBrick>rgb(178, 34, 34)</td></tr>
<tr><td><font color=FloralWhite>FloralWhite</font></td><td><font color=FloralWhite>#FFFAF0</font></td><td bgcolor=FloralWhite>rgb(255, 250, 240)</td></tr>
<tr><td><font color=ForestGreen>ForestGreen</font></td><td><font color=ForestGreen>#228B22</font></td><td bgcolor=ForestGreen>rgb(34, 139, 34)</td></tr>
<tr><td><font color=Fuchsia>Fuchsia</font></td><td><font color=Fuchsia>#FF00FF</font></td><td bgcolor=Fuchsia>rgb(255, 0, 255)</td></tr>
<tr><td><font color=Gainsboro>Gainsboro</font></td><td><font color=Gainsboro>#DCDCDC</font></td><td bgcolor=Gainsboro>rgb(220, 220, 220)</td></tr>
<tr><td><font color=GhostWhite>GhostWhite</font></td><td><font color=GhostWhite>#F8F8FF</font></td><td bgcolor=GhostWhite>rgb(248, 248, 255)</td></tr>
<tr><td><font color=Gold>Gold</font></td><td><font color=Gold>#FFD700</font></td><td bgcolor=Gold>rgb(255, 215, 0)</td></tr>
<tr><td><font color=GoldenRod>GoldenRod</font></td><td><font color=GoldenRod>#DAA520</font></td><td bgcolor=GoldenRod>rgb(218, 165, 32)</td></tr>
<tr><td><font color=Gray>Gray</font></td><td><font color=Gray>#808080</font></td><td bgcolor=Gray>rgb(128, 128, 128)</td></tr>
<tr><td><font color=Green>Green</font></td><td><font color=Green>#008000</font></td><td bgcolor=Green>rgb(0, 128, 0)</td></tr>
<tr><td><font color=GreenYellow>GreenYellow</font></td><td><font color=GreenYellow>#ADFF2F</font></td><td bgcolor=GreenYellow>rgb(173, 255, 47)</td></tr>
<tr><td><font color=HoneyDew>HoneyDew</font></td><td><font color=HoneyDew>#F0FFF0</font></td><td bgcolor=HoneyDew>rgb(240, 255, 240)</td></tr>
<tr><td><font color=HotPink>HotPink</font></td><td><font color=HotPink>#FF69B4</font></td><td bgcolor=HotPink>rgb(255, 105, 180)</td></tr>
<tr><td><font color=IndianRed>IndianRed</font></td><td><font color=IndianRed>#CD5C5C</font></td><td bgcolor=IndianRed>rgb(205, 92, 92)</td></tr>
<tr><td><font color=Indigo>Indigo</font></td><td><font color=Indigo>#4B0082</font></td><td bgcolor=Indigo>rgb(75, 0, 130)</td></tr>
<tr><td><font color=Ivory>Ivory</font></td><td><font color=Ivory>#FFFFF0</font></td><td bgcolor=Ivory>rgb(255, 255, 240)</td></tr>
<tr><td><font color=Khaki>Khaki</font></td><td><font color=Khaki>#F0E68C</font></td><td bgcolor=Khaki>rgb(240, 230, 140)</td></tr>
<tr><td><font color=Lavender>Lavender</font></td><td><font color=Lavender>#E6E6FA</font></td><td bgcolor=Lavender>rgb(230, 230, 250)</td></tr>
<tr><td><font color=LavenderBlush>LavenderBlush</font></td><td><font color=LavenderBlush>#FFF0F5</font></td><td bgcolor=LavenderBlush>rgb(255, 240, 245)</td></tr>
<tr><td><font color=LawnGreen>LawnGreen</font></td><td><font color=LawnGreen>#7CFC00</font></td><td bgcolor=LawnGreen>rgb(124, 252, 0)</td></tr>
<tr><td><font color=LemonChiffon>LemonChiffon</font></td><td><font color=LemonChiffon>#FFFACD</font></td><td bgcolor=LemonChiffon>rgb(255, 250, 205)</td></tr>
<tr><td><font color=LightBlue>LightBlue</font></td><td><font color=LightBlue>#ADD8E6</font></td><td bgcolor=LightBlue>rgb(173, 216, 230)</td></tr>
<tr><td><font color=LightCoral>LightCoral</font></td><td><font color=LightCoral>#F08080</font></td><td bgcolor=LightCoral>rgb(240, 128, 128)</td></tr>
<tr><td><font color=LightCyan>LightCyan</font></td><td><font color=LightCyan>#E0FFFF</font></td><td bgcolor=LightCyan>rgb(224, 255, 255)</td></tr>
<tr><td><font color=LightGoldenRodYellow>LightGoldenRodYellow</font></td><td><font color=LightGoldenRodYellow>#FAFAD2</font></td><td bgcolor=LightGoldenRodYellow>rgb(250, 250, 210)</td></tr>
<tr><td><font color=LightGrey>LightGrey</font></td><td><font color=LightGrey>#D3D3D3</font></td><td bgcolor=LightGrey>rgb(211, 211, 211)</td></tr>
<tr><td><font color=LightGreen>LightGreen</font></td><td><font color=LightGreen>#90EE90</font></td><td bgcolor=LightGreen>rgb(144, 238, 144)</td></tr>
<tr><td><font color=LightPink>LightPink</font></td><td><font color=LightPink>#FFB6C1</font></td><td bgcolor=LightPink>rgb(255, 182, 193)</td></tr>
<tr><td><font color=LightSalmon>LightSalmon</font></td><td><font color=LightSalmon>#FFA07A</font></td><td bgcolor=LightSalmon>rgb(255, 160, 122)</td></tr>
<tr><td><font color=LightSeaGreen>LightSeaGreen</font></td><td><font color=LightSeaGreen>#20B2AA</font></td><td bgcolor=LightSeaGreen>rgb(32, 178, 170)</td></tr>
<tr><td><font color=LightSkyBlue>LightSkyBlue</font></td><td><font color=LightSkyBlue>#87CEFA</font></td><td bgcolor=LightSkyBlue>rgb(135, 206, 250)</td></tr>
<tr><td><font color=LightSlateBlue>LightSlateBlue</font></td><td><font color=LightSlateBlue>#8470FF</font></td><td bgcolor=LightSlateBlue>rgb(132, 112, 255)</td></tr>
<tr><td><font color=LightSlateGray>LightSlateGray</font></td><td><font color=LightSlateGray>#778899</font></td><td bgcolor=LightSlateGray>rgb(119, 136, 153)</td></tr>
<tr><td><font color=LightSteelBlue>LightSteelBlue</font></td><td><font color=LightSteelBlue>#B0C4DE</font></td><td bgcolor=LightSteelBlue>rgb(176, 196, 222)</td></tr>
<tr><td><font color=LightYellow>LightYellow</font></td><td><font color=LightYellow>#FFFFE0</font></td><td bgcolor=LightYellow>rgb(255, 255, 224)</td></tr>
<tr><td><font color=Lime>Lime</font></td><td><font color=Lime>#00FF00</font></td><td bgcolor=Lime>rgb(0, 255, 0)</td></tr>
<tr><td><font color=LimeGreen>LimeGreen</font></td><td><font color=LimeGreen>#32CD32</font></td><td bgcolor=LimeGreen>rgb(50, 205, 50)</td></tr>
<tr><td><font color=Linen>Linen</font></td><td><font color=Linen>#FAF0E6</font></td><td bgcolor=Linen>rgb(250, 240, 230)</td></tr>
<tr><td><font color=Magenta>Magenta</font></td><td><font color=Magenta>#FF00FF</font></td><td bgcolor=Magenta>rgb(255, 0, 255)</td></tr>
<tr><td><font color=Maroon>Maroon</font></td><td><font color=Maroon>#800000</font></td><td bgcolor=Maroon>rgb(128, 0, 0)</td></tr>
<tr><td><font color=MediumAquaMarine>MediumAquaMarine</font></td><td><font color=MediumAquaMarine>#66CDAA</font></td><td bgcolor=MediumAquaMarine>rgb(102, 205, 170)</td></tr>
<tr><td><font color=MediumBlue>MediumBlue</font></td><td><font color=MediumBlue>#0000CD</font></td><td bgcolor=MediumBlue>rgb(0, 0, 205)</td></tr>
<tr><td><font color=MediumOrchid>MediumOrchid</font></td><td><font color=MediumOrchid>#BA55D3</font></td><td bgcolor=MediumOrchid>rgb(186, 85, 211)</td></tr>
<tr><td><font color=MediumPurple>MediumPurple</font></td><td><font color=MediumPurple>#9370D8</font></td><td bgcolor=MediumPurple>rgb(147, 112, 216)</td></tr>
<tr><td><font color=MediumSeaGreen>MediumSeaGreen</font></td><td><font color=MediumSeaGreen>#3CB371</font></td><td bgcolor=MediumSeaGreen>rgb(60, 179, 113)</td></tr>
<tr><td><font color=MediumSlateBlue>MediumSlateBlue</font></td><td><font color=MediumSlateBlue>#7B68EE</font></td><td bgcolor=MediumSlateBlue>rgb(123, 104, 238)</td></tr>
<tr><td><font color=MediumSpringGreen>MediumSpringGreen</font></td><td><font color=MediumSpringGreen>#00FA9A</font></td><td bgcolor=MediumSpringGreen>rgb(0, 250, 154)</td></tr>
<tr><td><font color=MediumTurquoise>MediumTurquoise</font></td><td><font color=MediumTurquoise>#48D1CC</font></td><td bgcolor=MediumTurquoise>rgb(72, 209, 204)</td></tr>
<tr><td><font color=MediumVioletRed>MediumVioletRed</font></td><td><font color=MediumVioletRed>#C71585</font></td><td bgcolor=MediumVioletRed>rgb(199, 21, 133)</td></tr>
<tr><td><font color=MidnightBlue>MidnightBlue</font></td><td><font color=MidnightBlue>#191970</font></td><td bgcolor=MidnightBlue>rgb(25, 25, 112)</td></tr>
<tr><td><font color=MintCream>MintCream</font></td><td><font color=MintCream>#F5FFFA</font></td><td bgcolor=MintCream>rgb(245, 255, 250)</td></tr>
<tr><td><font color=MistyRose>MistyRose</font></td><td><font color=MistyRose>#FFE4E1</font></td><td bgcolor=MistyRose>rgb(255, 228, 225)</td></tr>
<tr><td><font color=Moccasin>Moccasin</font></td><td><font color=Moccasin>#FFE4B5</font></td><td bgcolor=Moccasin>rgb(255, 228, 181)</td></tr>
<tr><td><font color=NavajoWhite>NavajoWhite</font></td><td><font color=NavajoWhite>#FFDEAD</font></td><td bgcolor=NavajoWhite>rgb(255, 222, 173)</td></tr>
<tr><td><font color=Navy>Navy</font></td><td><font color=Navy>#000080</font></td><td bgcolor=Navy>rgb(0, 0, 128)</td></tr>
<tr><td><font color=OldLace>OldLace</font></td><td><font color=OldLace>#FDF5E6</font></td><td bgcolor=OldLace>rgb(253, 245, 230)</td></tr>
<tr><td><font color=Olive>Olive</font></td><td><font color=Olive>#808000</font></td><td bgcolor=Olive>rgb(128, 128, 0)</td></tr>
<tr><td><font color=OliveDrab>OliveDrab</font></td><td><font color=OliveDrab>#6B8E23</font></td><td bgcolor=OliveDrab>rgb(107, 142, 35)</td></tr>
<tr><td><font color=Orange>Orange</font></td><td><font color=Orange>#FFA500</font></td><td bgcolor=Orange>rgb(255, 165, 0)</td></tr>
<tr><td><font color=OrangeRed>OrangeRed</font></td><td><font color=OrangeRed>#FF4500</font></td><td bgcolor=OrangeRed>rgb(255, 69, 0)</td></tr>
<tr><td><font color=Orchid>Orchid</font></td><td><font color=Orchid>#DA70D6</font></td><td bgcolor=Orchid>rgb(218, 112, 214)</td></tr>
<tr><td><font color=PaleGoldenRod>PaleGoldenRod</font></td><td><font color=PaleGoldenRod>#EEE8AA</font></td><td bgcolor=PaleGoldenRod>rgb(238, 232, 170)</td></tr>
<tr><td><font color=PaleGreen>PaleGreen</font></td><td><font color=PaleGreen>#98FB98</font></td><td bgcolor=PaleGreen>rgb(152, 251, 152)</td></tr>
<tr><td><font color=PaleTurquoise>PaleTurquoise</font></td><td><font color=PaleTurquoise>#AFEEEE</font></td><td bgcolor=PaleTurquoise>rgb(175, 238, 238)</td></tr>
<tr><td><font color=PaleVioletRed>PaleVioletRed</font></td><td><font color=PaleVioletRed>#D87093</font></td><td bgcolor=PaleVioletRed>rgb(216, 112, 147)</td></tr>
<tr><td><font color=PapayaWhip>PapayaWhip</font></td><td><font color=PapayaWhip>#FFEFD5</font></td><td bgcolor=PapayaWhip>rgb(255, 239, 213)</td></tr>
<tr><td><font color=PeachPuff>PeachPuff</font></td><td><font color=PeachPuff>#FFDAB9</font></td><td bgcolor=PeachPuff>rgb(255, 218, 185)</td></tr>
<tr><td><font color=Peru>Peru</font></td><td><font color=Peru>#CD853F</font></td><td bgcolor=Peru>rgb(205, 133, 63)</td></tr>
<tr><td><font color=Pink>Pink</font></td><td><font color=Pink>#FFC0CB</font></td><td bgcolor=Pink>rgb(255, 192, 203)</td></tr>
<tr><td><font color=Plum>Plum</font></td><td><font color=Plum>#DDA0DD</font></td><td bgcolor=Plum>rgb(221, 160, 221)</td></tr>
<tr><td><font color=PowderBlue>PowderBlue</font></td><td><font color=PowderBlue>#B0E0E6</font></td><td bgcolor=PowderBlue>rgb(176, 224, 230)</td></tr>
<tr><td><font color=Purple>Purple</font></td><td><font color=Purple>#800080</font></td><td bgcolor=Purple>rgb(128, 0, 128)</td></tr>
<tr><td><font color=Red>Red</font></td><td><font color=Red>#FF0000</font></td><td bgcolor=Red>rgb(255, 0, 0)</td></tr>
<tr><td><font color=RosyBrown>RosyBrown</font></td><td><font color=RosyBrown>#BC8F8F</font></td><td bgcolor=RosyBrown>rgb(188, 143, 143)</td></tr>
<tr><td><font color=RoyalBlue>RoyalBlue</font></td><td><font color=RoyalBlue>#4169E1</font></td><td bgcolor=RoyalBlue>rgb(65, 105, 225)</td></tr>
<tr><td><font color=SaddleBrown>SaddleBrown</font></td><td><font color=SaddleBrown>#8B4513</font></td><td bgcolor=SaddleBrown>rgb(139, 69, 19)</td></tr>
<tr><td><font color=Salmon>Salmon</font></td><td><font color=Salmon>#FA8072</font></td><td bgcolor=Salmon>rgb(250, 128, 114)</td></tr>
<tr><td><font color=SandyBrown>SandyBrown</font></td><td><font color=SandyBrown>#F4A460</font></td><td bgcolor=SandyBrown>rgb(244, 164, 96)</td></tr>
<tr><td><font color=SeaGreen>SeaGreen</font></td><td><font color=SeaGreen>#2E8B57</font></td><td bgcolor=SeaGreen>rgb(46, 139, 87)</td></tr>
<tr><td><font color=SeaShell>SeaShell</font></td><td><font color=SeaShell>#FFF5EE</font></td><td bgcolor=SeaShell>rgb(255, 245, 238)</td></tr>
<tr><td><font color=Sienna>Sienna</font></td><td><font color=Sienna>#A0522D</font></td><td bgcolor=Sienna>rgb(160, 82, 45)</td></tr>
<tr><td><font color=Silver>Silver</font></td><td><font color=Silver>#C0C0C0</font></td><td bgcolor=Silver>rgb(192, 192, 192)</td></tr>
<tr><td><font color=SkyBlue>SkyBlue</font></td><td><font color=SkyBlue>#87CEEB</font></td><td bgcolor=SkyBlue>rgb(135, 206, 235)</td></tr>
<tr><td><font color=SlateBlue>SlateBlue</font></td><td><font color=SlateBlue>#6A5ACD</font></td><td bgcolor=SlateBlue>rgb(106, 90, 205)</td></tr>
<tr><td><font color=SlateGray>SlateGray</font></td><td><font color=SlateGray>#708090</font></td><td bgcolor=SlateGray>rgb(112, 128, 144)</td></tr>
<tr><td><font color=Snow>Snow</font></td><td><font color=Snow>#FFFAFA</font></td><td bgcolor=Snow>rgb(255, 250, 250)</td></tr>
<tr><td><font color=SpringGreen>SpringGreen</font></td><td><font color=SpringGreen>#00FF7F</font></td><td bgcolor=SpringGreen>rgb(0, 255, 127)</td></tr>
<tr><td><font color=SteelBlue>SteelBlue</font></td><td><font color=SteelBlue>#4682B4</font></td><td bgcolor=SteelBlue>rgb(70, 130, 180)</td></tr>
<tr><td><font color=Tan>Tan</font></td><td><font color=Tan>#D2B48C</font></td><td bgcolor=Tan>rgb(210, 180, 140)</td></tr>
<tr><td><font color=Teal>Teal</font></td><td><font color=Teal>#008080</font></td><td bgcolor=Teal>rgb(0, 128, 128)</td></tr>
<tr><td><font color=Thistle>Thistle</font></td><td><font color=Thistle>#D8BFD8</font></td><td bgcolor=Thistle>rgb(216, 191, 216)</td></tr>
<tr><td><font color=Tomato>Tomato</font></td><td><font color=Tomato>#FF6347</font></td><td bgcolor=Tomato>rgb(255, 99, 71)</td></tr>
<tr><td><font color=Turquoise>Turquoise</font></td><td><font color=Turquoise>#40E0D0</font></td><td bgcolor=Turquoise>rgb(64, 224, 208)</td></tr>
<tr><td><font color=Violet>Violet</font></td><td><font color=Violet>#EE82EE</font></td><td bgcolor=Violet>rgb(238, 130, 238)</td></tr>
<tr><td><font color=VioletRed>VioletRed</font></td><td><font color=VioletRed>#D02090</font></td><td bgcolor=VioletRed>rgb(208, 32, 144)</td></tr>
<tr><td><font color=Wheat>Wheat</font></td><td><font color=Wheat>#F5DEB3</font></td><td bgcolor=Wheat>rgb(245, 222, 179)</td></tr>
<tr><td><font color=White>White</font></td><td><font color=White>#FFFFFF</font></td><td bgcolor=White>rgb(255, 255, 255)</td></tr>
<tr><td><font color=WhiteSmoke>WhiteSmoke</font></td><td><font color=WhiteSmoke>#F5F5F5</font></td><td bgcolor=WhiteSmoke>rgb(245, 245, 245)</td></tr>
<tr><td><font color=Yellow>Yellow</font></td><td><font color=Yellow>#FFFF00</font></td><td bgcolor=Yellow>rgb(255, 255, 0)</td></tr>
<tr><td><font color=YellowGreen>YellowGreen</font></td><td><font color=YellowGreen>#9ACD32</font></td><td bgcolor=YellowGreen>rgb(154, 205, 50)</td></tr>
</table>