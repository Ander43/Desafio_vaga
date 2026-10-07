import { Router } from "express";
import vendaController from "../controllers/vendaController.js";

const vendaRoutes = Router();

vendaRoutes.get("/", vendaController.selecionar);

vendaRoutes.post("/", vendaController.criar);

vendaRoutes.delete("/:id", vendaController.deletar);

vendaRoutes.put("/:id", vendaController.atualizar);

export default vendaRoutes;