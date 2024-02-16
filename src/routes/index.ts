import { Router } from "express";
import { PaymentController, CustomerController } from "../controllers";

const router = Router();

// Rota para obter todos os dados
router.get("/payments", PaymentController.getAllPayments);

// Rota para obter um dado por ID
router.get("/payments/:id", PaymentController.getPaymentId);

// Rota para criar um novo dado
router.post("/payments", PaymentController.createPayment);

// Rota para atualizar um dado por ID
router.put("/payments/:id", PaymentController.updatePayment);

// Rota para remover um dado por ID
router.delete("/payments/:id", PaymentController.deletePayment);

// Rota para obter todos os dados
router.get("/customers", CustomerController.getAllCustomers);

// Rota para obter um dado por ID
router.get("/customer/:id", CustomerController.getCustomerId);

// Rota para criar um novo dado
router.post("/customer", CustomerController.createCustomer);

// Rota para atualizar um dado por ID
router.put("/customer/:id", CustomerController.updateCustomer);

// Rota para remover um dado por ID
router.delete("/customer/:id", CustomerController.deleteCustomer);

export default router;
