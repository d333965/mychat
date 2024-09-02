@echo off
cd /d "%~dp0"
git add .
git commit -m "update msg"
git push -u origin main
pause
