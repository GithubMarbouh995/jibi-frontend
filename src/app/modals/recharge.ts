export interface Recharge {
    id: number;
    amount: number;
    description: string;
    paid: boolean;
    dueDate: Date;
    payment_account_id: number;
}