if exist cypress\results del /F /Q cypress\results
call npm run cypressChrome
call npm run reportChrome
if exist cypress\results del /F /Q cypress\results
call npm run cypressFirefox
call npm run reportFirefox
pause