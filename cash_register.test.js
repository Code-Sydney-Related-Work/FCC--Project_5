const { TestScheduler } = require('jest');
const checkCashRegister = require('./cash_register');
describe('checkCashRegister', ()=>{
   test('calculate the currencies to be dispensed', () => {
    expect(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
    ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toMatchObject({status: "OPEN", change: [["TWENTY", 60],
     ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});
    });
});