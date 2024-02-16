import { prismaClient1 } from "../prisma";

class CreatePaymentService {
  async execute(paymentData) {
    const payment = await prismaClient1.payment.create({
      data: paymentData,
    });
    return payment
  }
}

export { CreatePaymentService }
