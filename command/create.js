"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
exports.command = 'create <projectName>';
exports.describe = 'create tspring project';
exports.builder = {};
function handler(argv) {
    var projectPath = argv.projectName;
    if (!fs_extra_1.default.existsSync(projectPath)) {
        fs_extra_1.default.mkdirSync(projectPath);
    }
    fs_extra_1.default.copy(path_1.default.join(__dirname, '../template'), projectPath);
}
exports.handler = handler;
