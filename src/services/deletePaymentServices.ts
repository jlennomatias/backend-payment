import { prismaClient1 } from "../prisma";

class DeletePaymentService {
  async execute(paymentId) {
    const paymentDeletado = await prismaClient1.payment.delete({
      where: { paymentId: paymentId },
      include: {
				creditorAccount: true,
				debtorAccount: true,
				cancellation: true
			}
    });
    return paymentDeletado;
  }
}

export { DeletePaymentService }
