import { prismaClient1 } from "../prisma";

class CreatePaymentService {
  async execute(paymentData) {
    const payment = await prismaClient1.payment.create({
      data: paymentData,
      include: {
				creditorAccount: true,
				debtorAccount: true,
				cancellation: true
			}
    });
    return payment
  }
}

export { CreatePaymentService }
