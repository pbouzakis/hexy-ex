"use strict";

var chai = require("chai");
var sinonChai = require("sinon-chai");

global.sinon = require("sinon");
global.expect = chai.expect;

chai.use(sinonChai);
chai.should();
