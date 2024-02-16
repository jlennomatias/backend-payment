import { prismaClient1 } from "../prisma";

class DeletePaymentService {
  async execute(paymentId) {
    const paymentDeletado = await prismaClient1.payment.delete({
      where: { paymentId: paymentId },
    });
    return paymentDeletado;
  }
}

export { DeletePaymentService }
