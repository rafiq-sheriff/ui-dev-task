@echo off
REM ========================================
REM Setup Script for GTG Perfumes Vanilla Version (Windows)
REM ========================================

echo 🚀 Setting up GTG Perfumes Vanilla Version...
echo.

REM Check if running from vanilla-version directory
if not exist "index.html" (
    echo ❌ Error: Please run this script from the vanilla-version directory
    echo    cd vanilla-version ^&^& setup.bat
    exit /b 1
)

REM Create assets directory if it doesn't exist
if not exist "assets" (
    echo 📁 Creating assets directory...
    mkdir assets
)

REM Check if public\assets exists in parent directory
if exist "..\public\assets" (
    echo 📦 Copying assets from ..\public\assets\...
    xcopy /E /I /Y ..\public\assets assets
    echo ✅ Assets copied successfully!
) else (
    echo ⚠️  Warning: ..\public\assets\ not found
    echo    Please manually copy assets to vanilla-version\assets\
    echo.
    echo    From project root:
    echo    xcopy /E /I public\assets vanilla-version\assets
)

REM Update asset paths in files
echo.
echo 🔧 Updating asset paths in files...

powershell -Command "(gc index.html) -replace '\.\./public/assets/', 'assets/' | Out-File -encoding ASCII index.html"
powershell -Command "(gc css\styles.css) -replace '\.\./public/assets/', 'assets/' | Out-File -encoding ASCII css\styles.css"
powershell -Command "(gc js\main.js) -replace '\.\./public/assets/', 'assets/' | Out-File -encoding ASCII js\main.js"

echo ✅ Paths updated successfully!

echo.
echo ✅ Setup complete!
echo.
echo 🌐 To run the project:
echo.
echo    Option 1 - Python:
echo    python -m http.server 8000
echo.
echo    Option 2 - Node.js:
echo    npx http-server -p 8000
echo.
echo    Option 3 - VS Code Live Server:
echo    Right-click index.html ^> Open with Live Server
echo.
echo 📖 See README.md for more information
echo.
pause
