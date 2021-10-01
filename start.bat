@ECHO OFF
IF NOT EXIST node_modules/ (
   ECHO Installing all the dependencies required ...
   npm install
) ELSE (
  ECHO Strting ...
  node index.js
)
PAUSE