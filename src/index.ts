import express, { json } from "express";
import paymentRoutes from "./routes/index";
import keycloak, { memoryStore } from "./keycloak";
import session from "express-session";

const app = express();
app.use(json());

app.use(session({
	secret: '12345678909',
	resave: false, // não fazer resave
	saveUninitialized: true, // salvar quando não for feito a inicialização
	store: memoryStore, // usar o mesmo store de armazenamento
	cookie: {
		maxAge: 1000 * 60 * 10 //configuração do cookie(segundo, , minutos)
	}
}))

app.use(keycloak.middleware({
	logout: "/logout",
	admin: "/"
}))

// Usar as rotas do usuário
app.use("/api", keycloak.protect(), paymentRoutes);

export default app;
