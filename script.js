let dizel = 24.53 , benzin= 22.25 , lpg= 11.1

const newLine = "\r\n";

const fuelText = "1-dizel" +newLine
+"2-benzin" +newLine 
 +"3-lpg" +newLine
 +"Choose your fuel type"


let fuelType = prompt(fuelText);
if(fuelType == "1" || fuelType == "2" || fuelType == "3")
{
    let fuelSize = +(prompt("How much you want fuel"))
    let balance = +(prompt("Please enter your balance"))
    
    if(fuelType=="1"){
    let amountToBePaid = dizel*fuelSize
    if(amountToBePaid<balance){
        balance = balance-amountToBePaid
    
        alert("Refuelling process succesfull!"+newLine
        +"Balance : " +((balance-amountToBePaid)))
    }
    else {
        alert("Your balance is not enough"+newLine 
        +"Amount to be paid : " + amountToBePaid+newLine 
        +"Balance : " +balance+newLine
        +"Missing amount : " +(amountToBePaid-balance)) //
    }
    }
     else if(fuelType=="2"){
        let amountToBePaid = benzin*fuelSize
        if(amountToBePaid<balance){
            balance = balance-amountToBePaid
        
            alert("Refuelling process succesfull!"+newLine
            +"Balance : " +((balance-amountToBePaid)))
        }
        else {
            alert("Your balance is not enough"+newLine 
            +"Amount to be paid : " + amountToBePaid+newLine 
            +"Balance : " +balance+newLine
            +"Missing amount : " +(amountToBePaid-balance)) //
        }
    } 
    else if(fuelType=="3")
    {
        let amountToBePaid = lpg*fuelSize
    if(amountToBePaid<balance){
        balance = balance-amountToBePaid
    
        alert("Refuelling process succesfull!"+newLine
        +"Balance : " +((balance-amountToBePaid)))
    }
    else {
        alert("Your balance is not enough"+newLine 
        +"Amount to be paid : " + amountToBePaid+newLine 
        +"Balance : " +balance+newLine
        +"Missing amount : " +(amountToBePaid-balance)) //
    }
    }
}

 else {
    alert("Please select a valid fuel type");
 }
