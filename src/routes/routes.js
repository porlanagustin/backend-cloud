import { Router } from "express";

const router = Router();

router
  .route("/api/items")
  .get((req, res) => {
    res.status(200).json({
      message: "Elementos obtenidos correctamente",
      items: [
        { id: 1, nombre: "Item 1" },
        { id: 2, nombre: "Item 2" },
      ],
    });
  })
  .post((req, res) => {
    const nuevoItem = req.body;
    res.status(201).json({
      message: "Elemento creado correctamente",
      item: nuevoItem,
    });
  })
  .put((req, res) => {
    const itemActualizado = req.body;
    res.status(200).json({
      message: "Elemento actualizado correctamente",
      item: itemActualizado,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      message: "Elemento eliminado correctamente",
    });
  });

export default router;
