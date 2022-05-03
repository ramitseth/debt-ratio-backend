import { Injectable } from '@nestjs/common';
import dummyData from './app.data';
import { loan, user } from './app.model';

@Injectable()
export class AppService {
  getDebtRatio(id: string): string {
    try {
      const userFound: user = dummyData.find((item: user) => Number(item.id) === Number(id));
      if (userFound) {
        let totalDebt: number = 0;
        if (userFound.totalMonthlyExpenses) {
          totalDebt += userFound.totalMonthlyExpenses;
        }
        userFound.loans.forEach((item: loan) => {
          totalDebt += item.monthlyPayment;
        });

        const grossMonthlyIncome: number = userFound.grossIncome / 12;
        const ratio: number = totalDebt / grossMonthlyIncome * 100;
        const roundedOffRatio: number = Math.round(ratio * 100) / 100;

        const result: Object = {
          name: userFound.name,
          debtRatio: `${roundedOffRatio} %`
        };

        return JSON.stringify(result);
      } else {
        return `User with id ${id} not found`;
      }
    } catch (e: any) {
      return e?.message.toString();
    }
  }
}
