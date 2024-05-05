"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json({ limit: "5mb" }));
app.use(express_1.default.static("public"));
// app.use(
//   cors({
//     origin: "http://yourapp.com",
//   })
// );
// app.use("/activities", getAllActivities);
app.use("/", router_1.default);
app.listen(port, () => {
    console.log(`Connect successfully in port ${port}`);
});
