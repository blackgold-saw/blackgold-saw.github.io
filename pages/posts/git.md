---
layout: post
title: Git常用命令整理
date: 2023-08-04 17:21:12
tags: ['Git']
categories: ['🎓学学']
---

>存放一些比较常用的Git命令。

**先说说啥是Git**

Git是一个分布式版本控制软件，可以有效、高速地处理从很小到非常大的项目版本管理。

[官网戳这](https://git-scm.com/)

<!-- more -->

## 拉取代码

- 仓库克隆：`git clone xxx`
- 拉取最新代码：`git pull`
## 本地关联远程仓库

- 初始化：`git init`
- 关联远程仓库：`git remote add origin git@github.com:xxx/xxx.git`或者
`git remote add origin https://github.com/xxx/xxx`
- 查看远程库信息：`git remote -v`
- 删除远程仓库地址：`git remote rm origin`

## 提交代码

- 保存暂存区：<br />
添加当前目录下的所有文件到暂存区：`git add .` <br />
添加指定目录到暂存区，包括子目录：`git add [dir]` <br />
添加一个或多个文件到暂存区：`git add [file1] [file2] ...` <br />
- 查看项目当前状态：`git status -s`
- 提交代码至本地仓库：`git commit -m "commit info"`
- 修改提交描述：`git commit --amend`
- 推送代码到远程仓库：`git push`

## 分支管理

- 列出当前分支：`git branch`
- 新增分支：`git checkout -b xxx`
- 删除分支：`git branch -d fake-branch`
- 修改分支名称：`git branch -m old_branch_name new_branch_name`
- 合并分支：`git merge fake-branch`

::: info 本文参考
<font size=2> 1. <a href="https://zh.wikipedia.org/wiki/Git">维基百科：Git</a> </font> <br />
<font size=2> 2. <a href="https://www.yuque.com/yunyoujun/notes/git-learn-note">语雀：云游君的学习笔记</a> </font> <br />
<font size=2> 3. <a href="https://www.runoob.com/git/git-tutorial.html">菜鸟教程：Git</a> </font>
<br />
<br />
:::
