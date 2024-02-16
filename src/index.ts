import express, { json } from "express";
import paymentRoutes from "./routes/index";

const app = express();
app.use(json());

// Usar as rotas do usuário
app.use("/api", paymentRoutes);

export default app;
