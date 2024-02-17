import { prismaClient1 } from "../prisma";

class UpdatePaymentService {
  async execute(paymentId, paymentPayload) {
    const paymentAtualizado = await prismaClient1.payment.update({
      where: { paymentId: paymentId },
      data: paymentPayload,
      include: {
        creditorAccount: true,
        debtorAccount: true,
        cancellation: true
      }
    });

    return paymentAtualizado;
  }
}

export { UpdatePaymentService }
