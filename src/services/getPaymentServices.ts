import { prismaClient1 } from "../prisma";

class GetPaymentService{
	async execute(){
		const payments = await prismaClient1.payment.findMany();
    return payments
	}
}

class GetPaymentIdService{
	async execute(paymentId){
		const payment = await prismaClient1.payment.findUnique({
      where: { paymentId: paymentId },
    });
    return payment
	}
}

export { GetPaymentService, GetPaymentIdService }
