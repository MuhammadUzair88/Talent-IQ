import dotenv from "dotenv";
dotenv.config();  // MUST be first

import express from "express";
import cors from "cors";
import { connectDB } from "./lib/DB.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { clerkMiddleware } from "@clerk/express";
import { protectRoute } from "./middlewares/protectRoute.js";
import ChatRoutes from "./routes/ChatRoutes.js";
import SessionRoutes from "./routes/sessionRoute.js";
import "./lib/stream.js"; // important: loads after dotenv

const app = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Server is running" });
});

app.use("/api/inngest", serve({ client: inngest, functions }));

app.get("/books", protectRoute, (req, res) => {
    res.status(200).json({ msg: "this is the books endpoint" });
});

app.use("/api/chat", ChatRoutes);
app.use("/api/session", SessionRoutes);

// DB Connection
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
