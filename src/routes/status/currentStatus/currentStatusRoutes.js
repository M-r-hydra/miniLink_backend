"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentStatusRoutes = void 0;
// Express
const express_1 = __importDefault(require("express"));
// Express
const si = require("systeminformation");
exports.currentStatusRoutes = express_1.default.Router();
exports.currentStatusRoutes.get("/current-status", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cpu = yield si.cpu();
        const ram = yield si.mem();
        const disk = yield si.diskIO();
        const osInfo = yield si.osInfo();
        res.status(200).json({
            cpu,
            ram,
            disk,
            osInfo,
        });
    }
    catch (err) {
        res.status(413).json(err);
    }
}));
