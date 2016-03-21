var fs = require('fs');
var exec = require('child_process').exec;

console.log("machine.js loaded");

// functions
function setElementText(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;    
}

function execCmd(cmd, elementId, parseFn) {
    exec(cmd, function(error, stdout, stderr) {
        console.log(stdout);
        console.log(error);
        console.log(stderr);
        if (parseFn == undefined)
            setElementText(elementId,stdout);
        else
            setElementText(elementId,parseFn(stdout));
    });
};


// Motherboard
var board_vendor = fs.readFileSync('/sys/devices/virtual/dmi/id/board_vendor', 'utf8');
var board_name = fs.readFileSync('/sys/devices/virtual/dmi/id/board_name', 'utf8');
var board_version = fs.readFileSync('/sys/devices/virtual/dmi/id/board_version', 'utf8');
setElementText("mb",board_vendor + " " + board_name + " " + board_version);

// CPU
var parseFn = function(str) { return str.substring(13)}
execCmd('cat /proc/cpuinfo | grep -m 1 "model name"', "cpu", parseFn );

// Total memory
var parseFn = function(str) { return str.substring(10)}
execCmd('cat /proc/meminfo  | grep -i MemTotal',"total_memory", parseFn)

// OS
var parseFn = function(str) { return str }
execCmd('uname -sr', "os");


// Public IP
execCmd('curl http://myip.dnsomatic.com', "public_ip");

// Private IP
execCmd("hostname -I | awk '{print $1}'","private_ip")

