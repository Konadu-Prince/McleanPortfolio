@echo off
REM Portfolio Server Startup Script
REM Allows running the portfolio on different ports

echo Starting Portfolio Server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/downloads/
    pause
    exit /b 1
)

REM Check if port is provided as argument, otherwise use default
if "%1"=="" (
    set PORT=8000
) else (
    set PORT=%1
)

echo Starting server on port %PORT%...
echo Visit http://localhost:%PORT% to view the portfolio
echo Press Ctrl+C to stop the server
echo.

REM Start the server
python -m http.server %PORT%

pause