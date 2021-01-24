function checkCashRegister(price, cash, cid) 
            {            
                let changeOwed = cash - price;
                let cashInBox = 0;

                let accArray = [];
                for(let m = 0; m < cid.length; m++){accArray[m]=cid[cid.length - 1 - m];} //console.log(accArray);

                XXXXXXXXXXXXXXXXX PORTION OF CODE DELETED TO PROTECT INTELLECTUAL PROPERTY XXXXXXXXXXXXXXXX
                
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

               XXXXXXXXXXXXXXXXXXXXXX PORTION OF CODE DELETED TO PROTECT INTELLECTUAL PROPERTY XXXXXXXXXXXXXXXX
               
               
                if(outputArray.length < 1 || changeOwed > 0){
                    outputObj.status = "INSUFFICIENT_FUNDS";
                    return outputObj;
                }             

                outputObj.status = "OPEN";
                outputObj.change = outputArray;
                return outputObj;
            }

            module.exports = checkCashRegister;
