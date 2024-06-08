export interface Donation {
    id: number;
    amount: number;
    description: string;
    paid: boolean;
    dueDate: Date;
    payment_account_id: number;
}