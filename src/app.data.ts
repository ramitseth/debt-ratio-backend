const dummyData: Array<any> = [
    {
        "id": 1,
        "name": "Ellen Ripley",
        "grossIncome": 67000,
        "loans": [
            {
                "type": "Student",
                "loanAmount": 10000,
                "originationDate": "2020-09-10",
                "monthlyPayment": 100
            },
            {
                "type": "Mortgage",
                "loanAmount": 300000,
                "originationDate": "2022-01-10",
                "monthlyPayment": 1600
            }
        ],
        "totalMonthlyExpenses": 1200.0,
        "taxRate": 0.3
    },
    {
        "id": 2,
        "name": "John McClane",
        "grossIncome": 88000,
        "loans": [
            {
                "type": "Personal",
                "loanAmount": 30000,
                "originationDate": "2008-12-24",
                "monthlyPayment": 50
            },
            {
                "type": "Student",
                "loanAmount": 10000,
                "originationDate": "2001-12-24",
                "monthlyPayment": 300
            }
        ],
        "totalMonthlyExpenses": 1100.0,
        "taxRate": 0.3
    },
    {
        "id": 3,
        "name": "Sarah Connor",
        "grossIncome": 200000,
        "loans": [
            {
                "type": "Mortgage",
                "loanAmount": 700000,
                "originationDate": "2002-05-19",
                "monthlyPayment": 4000
            }
        ],
        "totalMonthlyExpenses": 3000.0,
        "taxRate": 0.4
    },
    {
        "id": 4,
        "name": "Snake Plissken",
        "grossIncome": 77800,
        "loans": [
            {
                "type": "Mortgage",
                "loanAmount": 100200,
                "originationDate": "2020-03-23",
                "monthlyPayment": 780.31
            }
        ],
        "totalMonthlyExpenses": 765.02,
        "taxRate": 0.33
    }
];

export default dummyData;
