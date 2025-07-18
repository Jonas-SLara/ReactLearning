import express from "express";
import restaurantesRoutes from "./routes/restaurantes.routes.js";

const port = 3333;
const app = express();

// Middleware global para JSON
app.use(express.json());

// Rotas
app.use("/restaurantes", restaurantesRoutes);

app.get("/", (req, res) => {
    res.send("API de Restaurantes");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
