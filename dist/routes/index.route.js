"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = express_1.Router();
router.get('**', (req, res, next) => {
    res.sendFile("index.html", { root: "./dist/public" });
});
exports.indexRoute = router;
//# sourceMappingURL=index.route.js.map