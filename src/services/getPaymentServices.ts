import { prismaClient1 } from "../prisma";

class GetPaymentService{
	async execute(){
		const payments = await prismaClient1.payment.findMany({
			include: {
				creditorAccount: true,
				debtorAccount: true,
				cancellation: true
			}
		});
    return payments
	}
}

class GetPaymentIdService{
	async execute(paymentId){
		const payment = await prismaClient1.payment.findUnique({
      where: { paymentId: paymentId },
			include: {
				creditorAccount: true,
				debtorAccount: true,
				cancellation: true
			}
    });
    return payment
	}
}

export { GetPaymentService, GetPaymentIdService }
