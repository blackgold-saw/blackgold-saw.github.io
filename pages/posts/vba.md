---
layout: post
title: 教练我想成为VBA高手
tags: ['VBA']
categories: ['🎓学学']
date: 2023-08-14 17:29:33
updated: 2023-08-15
end: false
---

## 1. 第一个项目：Hello World

效果如下：

![](https://cdn.carmendei.cn/myblog/resource/artimg/vba/HelloWorld.png)_Hello World_

源码：

``` vb
Sub helloworld_Click()
    Dim message As String
    message = "Hello World!"
    MsgBox message, vbInformation, "info"
End Sub
```

## 2. 第二个项目：简易计算器         

效果如下：

![](https://cdn.carmendei.cn/myblog/resource/artimg/vba/计算器.png)_计算器_

源码：

``` vb
Private Sub EqButton_Click()
    Dim num1, num2 As Double
    
    '数值转换
    num1 = CDbl(UserForm1.TextBox1.Value)
    num2 = CDbl(UserForm1.TextBox2.Value)
    
    If UserForm1.OptionButton1.Value Then
        UserForm1.result.Caption = num1 + num2
    ElseIf UserForm1.OptionButton2.Value Then
        UserForm1.result.Caption = num1 - num2
    ElseIf UserForm1.OptionButton3.Value Then
        UserForm1.result.Caption = num1 * num2
    ElseIf UserForm1.OptionButton4.Value Then
        If num2 = 0 Then
             MsgBox "被除数不可为0", vbCritical, "错误"
        Else
             UserForm1.result.Caption = num1 / num2
        End If
    End If
End Sub


Private Sub ResetButton_Click()
    UserForm1.OptionButton1.Value = True
    UserForm1.TextBox1.Value = ""
    UserForm1.TextBox2.Value = ""
    UserForm1.result.Caption = "0"
End Sub

Private Sub TextBox1_Change()
    Dim tb As String
    tb = TextBox1.Value
    If Not IsNumeric(tb) Then
        TextBox1.Value = ""
    End If
End Sub

Private Sub TextBox2_Change()
    Dim tb As String
    tb = TextBox2.Value
    If Not IsNumeric(tb) Then
        TextBox2.Value = ""
    End If
End Sub


Private Sub TextBox1_KeyPress(ByVal KeyAscii As MSForms.ReturnInteger)
    Dim userInput As String
    Dim newChar As String
    
    ' 获取用户输入
    userInput = TextBox1.Text
    
    ' 获取新输入的字符
    newChar = Chr(KeyAscii)
    
    ' 检查新输入的字符是否是数字、小数点或退格键
    If Not (IsNumeric(newChar) Or newChar = "." Or KeyAscii = 8) Then
        KeyAscii = 0 ' 屏蔽非数字、非小数点和非退格键输入
    End If
    
    ' 检查小数点是否已经存在
    If newChar = "." And InStr(userInput, ".") > 0 Then
        KeyAscii = 0 ' 屏蔽额外的小数点输入
    End If
End Sub

Private Sub TextBox2_KeyPress(ByVal KeyAscii As MSForms.ReturnInteger)
    Dim userInput As String
    Dim newChar As String
    
    ' 获取用户输入
    userInput = TextBox2.Text
    
    ' 获取新输入的字符
    newChar = Chr(KeyAscii)
    
    ' 检查新输入的字符是否是数字、小数点或退格键
    If Not (IsNumeric(newChar) Or newChar = "." Or KeyAscii = 8) Then
        KeyAscii = 0 ' 屏蔽非数字、非小数点和非退格键输入
    End If
    
    ' 检查小数点是否已经存在
    If newChar = "." And InStr(userInput, ".") > 0 Then
        KeyAscii = 0 ' 屏蔽额外的小数点输入
    End If
End Sub
```

