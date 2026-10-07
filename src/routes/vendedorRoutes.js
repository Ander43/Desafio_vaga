import {Router} from "express";
import vendedorController from "../controllers/vendedorController.js";


const vendedorRoutes = Router();

vendedorRoutes.get("/", vendedorController.selecionar);

vendedorRoutes.post("/", vendedorController.criar);

vendedorRoutes.delete("/:id", vendedorController.deletar);

vendedorRoutes.put("/:id", vendedorController.atualizar);


export default vendedorRoutes;