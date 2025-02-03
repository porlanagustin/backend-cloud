import express, { json, urlencoded } from "express";
import router from "./routes/routes.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("¡Algo salió mal!");
});

app.use("/api", router);

async function startServer() {
  try {
    app.listen(port, () => {
      console.log(`✅ Servidor iniciado exitosamente en el puerto ${port}`);
      console.log(`📚 API disponible en http://localhost:${port}/api`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

process.on("unhandledRejection", (err) => {
  console.error("❌ Error no manejado:", err);
  process.exit(1);
});

startServer();
