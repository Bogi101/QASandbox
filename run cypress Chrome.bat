if exist cypress\results del /F /Q cypress\results
call npm run cypressChrome
call npm run reportChrome
pause