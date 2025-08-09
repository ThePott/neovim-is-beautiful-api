import express from "express";
import cors, { CorsOptions } from "cors";

const app = express();
app.use(express.json());
app.use(express.text());

const corsOptions: CorsOptions = {
    origin: ["http://localhost:5173"],
    methods: ["OPTIONS", "GET", "POST", "PATCH", "DELETE"],
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3456
app.listen(PORT, () => console.log("---- neovim server is on:", PORT))
