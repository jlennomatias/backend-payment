import { Request, Response } from "express";
import { GetPaymentService, GetPaymentIdService } from "../../services/getPaymentServices"
import { CreatePaymentService } from "../../services/createPaymentServices"
import { UpdatePaymentService } from "../../services/updatePaymentServices"
import { DeletePaymentService } from "../../services/deletePaymentServices"
import { Prisma } from "../../../prisma/generated/client1";

const getAllPayments = async (req: Request, res: Response) => {
  try {
    const paymentService = new GetPaymentService();

    const payments = await paymentService.execute();

    res.status(200).json(payments);
  } catch (error) {
    console.error("Erro na função getAllPayments:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const createPayment = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;

    const paymentData: Prisma.PaymentCreateInput = {
      endToEndId: data.endToEndId,
      consentId: "data.consentId",
      localInstrument: data.localInstrument,
      proxy: data.proxy,
      ibgeTownCode: data.ibgeTownCode,
      status: "data.status",
      rejectionReasonCode: "data.rejectionReasonCode",
      rejectionReasonDetail: "data",
      cnpjInitiator: data.cnpjInitiator,
      paymentAmount: data.payment.amount,
      paymentCurrency: data.payment.currency,
      transactionIdentification: data.transactionIdentification,
      remittanceInformation: data.remittanceInformation,
      creditorAccount: {
        create: data.creditorAccount
      }
    };

    // Cria um novo usuário utilizando o Prisma
    const paymentService = new CreatePaymentService();

    const payment = await paymentService.execute(paymentData);

    res.status(201).json(payment);
  } catch (error) {
    console.error("Erro na função createPayment:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const getPaymentId = async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.id;
    const paymentService = new GetPaymentIdService();

    const payments = await paymentService.execute(paymentId);

    if (!payments) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(payments);
  } catch (error) {
    console.error("Erro ao listar usuário por ID:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const updatePayment = async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.id;
    const { data } = req.body;

    const paymentData: Prisma.PaymentUpdateInput = {
      endToEndId: data.endToEndId,
      consentId: data.consentId,
      localInstrument: data.localInstrument,
      proxy: data.proxy,
      ibgeTownCode: data.ibgeTownCode,
      status: data.status,
      rejectionReasonCode: data.rejectionReasonCode,
      rejectionReasonDetail: data.rejectionReasonDetail,
      cnpjInitiator: data.cnpjInitiator,
      paymentAmount: data.payment?.amount,
      paymentCurrency: data.payment?.currency,
      transactionIdentification: data.transactionIdentification,
      remittanceInformation: data.remittanceInformation,
      creditorAccount: {
        update: data.creditorAccount
      }
    };

    const getpaymentService = new GetPaymentIdService();

    const getpayment = await getpaymentService.execute(paymentId);
    if (!getpayment) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    
    const paymentService = new UpdatePaymentService();
    const payment = await paymentService.execute(paymentId, paymentData)


    res.status(200).json(payment);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const deletePayment = async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.id;

    const deletePayment = new DeletePaymentService();

    const payment = await deletePayment.execute(paymentId);

    if (!payment) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export { getAllPayments, getPaymentId, createPayment, updatePayment, deletePayment };
