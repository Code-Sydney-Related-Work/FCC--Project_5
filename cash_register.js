function checkCashRegister(price, cash, cid) 
            {            
                let changeOwed = cash - price;
                let cashInBox = 0;

                let accArray = [];
                for(let m = 0; m < cid.length; m++){accArray[m]=cid[cid.length - 1 - m];} //console.log(accArray);

                let cashReg = [["ONE HUNDRED", 100.0] ,["TWENTY", 20.0 ],["TEN", 10.0],["FIVE", 5.0], 
                ["ONE", 1.0],["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY",0.005]]; 
                cashReg.sort((a,b)=>{return b-a});
                let outputArray = [];
                let outputObj = { "status":"", "change": [] };
                
                for(let i=0; i < cid.length; i++)
                {cashInBox += cid[i][1];}
               
                if (cashInBox === changeOwed) 
                { outputObj.status = "CLOSED";
                    outputObj.change = cid;
                    return outputObj;}

                if (cashInBox < changeOwed) 
                {  outputObj.status = "INSUFFICIENT_FUNDS";
                    return outputObj;}

                let tempcashcount = cashInBox;
                let allocatedcurr = 0;

                for(let i=0; i < cid.length; i++){
                    if(changeOwed >= cashReg[i][1]){
                        let temp1 = 0;
                        if(changeOwed >= accArray[i][1]){
                            changeOwed = changeOwed - ((accArray[i][1])/cashReg[i][1])*cashReg[i][1];
                            changeOwed = Math.round(changeOwed*100)/100;
                            let tempArray = [];
                            tempArray.push(accArray[i][0]);
                            tempArray.push(accArray[i][1]);
                            //console.log(i,tempArray);
                            outputArray.push(tempArray);
                        }
                        else if(changeOwed < accArray[i][1]){
                            let tempArray = []; 
                            let counter = 1;
                            let tempVar = changeOwed; console.log(tempVar);
                           do
                            {tempVar = tempVar - cashReg[i][1]; counter ++;}
                            while(tempVar/cashReg[i][1] >= 1);                            
                            console.log(tempVar, cashReg[i][1], counter);
                            tempArray.push(accArray[i][0]);
                            tempArray.push(Math.round((changeOwed - tempVar)*100)/100);
                            changeOwed = tempVar;  
                            changeOwed = Math.round(changeOwed*100)/100;                      
                            
                            //console.log(i,tempArray);
                            outputArray.push(tempArray);
                            //changeOwed = 0;
                        }
                    }                    
                } 
             
                if(outputArray.length < 1 || changeOwed > 0){
                    outputObj.status = "INSUFFICIENT_FUNDS";
                    return outputObj;
                }             

                outputObj.status = "OPEN";
                outputObj.change = outputArray;
                return outputObj;
            }

            module.exports = checkCashRegister;