import { Router } from "express";
import tituloController from "../controllers/tituloController.js";

const tituloRoutes = Router();

tituloRoutes.get("/", tituloController.selecionar);

tituloRoutes.post("/", tituloController.criar);

tituloRoutes.delete("/:id", tituloController.deletar);

tituloRoutes.put("/:id", tituloController.atualizar);

export default tituloRoutes;
