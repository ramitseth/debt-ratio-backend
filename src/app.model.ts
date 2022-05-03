export interface user {
    id: number,
    name: string,
    grossIncome: number,
    loans: Array<loan>,
    totalMonthlyExpenses: number,
    taxRate: number
}

export interface loan {
    type: string,
    loanAmount: number,
    originationDate: string,
    monthlyPayment: number
}