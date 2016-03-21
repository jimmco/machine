# Machine
Application providing basic Machine information (CPU, Motherboard, memory, OS, IP)
Note: Currently works on GNU/Linux only 

## Howto build & run (on Linux)
Prerequisites: node.js
NPM prerequisites: electron-prebuilt, gulp

Build
```
git clone
https://github.com/jimmco/machine.git
cd machine/machine-electron
sh build-linux.sh
```

Execute
```
cd machine/machine-electron/src/machine-linux-s64
./machine
```
