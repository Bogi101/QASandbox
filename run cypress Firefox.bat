if exist cypress\results del /F /Q cypress\results
call npm run cypressFirefox
call npm run reportFirefox
pause