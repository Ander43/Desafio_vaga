import { Router } from "express";
import movimentacaoController from "../controllers/movimentacaoController.js";


const movimentacaoRoutes = Router();

movimentacaoRoutes.get("/", movimentacaoController.selecionar);

movimentacaoRoutes.post("/", movimentacaoController.criar);

movimentacaoRoutes.delete("/:id", movimentacaoController.deletar);

movimentacaoRoutes.put("/:id", movimentacaoController.atualizar);

export default movimentacaoRoutes;