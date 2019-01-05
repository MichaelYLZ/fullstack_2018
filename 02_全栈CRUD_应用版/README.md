# 项目介绍和使用方法

## 项目简介

这个Demo是应用版，只需要安装3个dependencies就可以了。

之前demo链接(应用版)：https://github.com/MichaelYLZ/app_production。

之前是用一个**JSON**文件当数据库。

这个demo使用了**MongoDB**来实现数据的可持续化。

重构中，Express代码基本需要重写，react中只有HTTP请求代码需要重写。

HTTP请求我使用了**axios**，感觉比**fetch API**好用。

## 使用方法

1. 建议提前打开MongoDB服务器
1. 下载后此demo后，cd 文件夹名 进入文件夹
1. npm i
1. npm start