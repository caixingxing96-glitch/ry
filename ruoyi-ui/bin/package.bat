@echo off
echo.
<<<<<<< HEAD
echo [信息] 安装Web工程，生成node_modules文件。
=======
echo [信息] 打包Web工程，生成node_modules包文件。
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)
echo.

%~d0
cd %~dp0

cd ..
<<<<<<< HEAD
npm install --registry=https://registry.npmmirror.com
=======
npm install --registry=https://registry.npm.taobao.org
>>>>>>> 46444bd0 (RuoYi-Vue 1.0)

pause