@echo off
call "C:\Program Files (x86)\Microsoft Visual Studio\2022\BuildTools\VC\Auxiliary\Build\vcvarsall.bat" amd64
set PATH=%USERPROFILE%\.cargo\bin;%PATH%
npm run tauri dev
