import 'dotenv/config';
import express from 'express';

import vendedorRoutes from './routes/vendedorRoutes.js';
import vendaRoutes from './routes/vendaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import movimentacaoRoutes from './routes/movimentacaoRoutes.js';
import tituloRoutes from './routes/tituloRoutes.js';

const app = express();

const port = process.env.SERVER_PORT;

app.use(express.json());

app.use('/vendedor', vendedorRoutes);
app.use('/venda', vendaRoutes);
app.use('/produto', produtoRoutes);
app.use('/movimentacao', movimentacaoRoutes);
app.use('/titulo', tituloRoutes);

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});
