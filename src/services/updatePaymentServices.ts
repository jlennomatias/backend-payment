import { prismaClient1 } from "../prisma";

class UpdatePaymentService {
  async execute(paymentId, paymentPayload) {
    const paymentAtualizado = await prismaClient1.payment.update({
      where: { paymentId: paymentId },
      data: paymentPayload,
    });
    return paymentAtualizado;
  }
}

export { UpdatePaymentService }
