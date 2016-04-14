#!/usr/bin/env node

var spawn = require("child_process").spawn;
var electron = require("electron-prebuilt");
var proc = spawn(electron, [__dirname]);
