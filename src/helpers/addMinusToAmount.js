export const AddMinusToAmount=(amount,type)=>{
    if(type==="expense"&&Number(amount)!==0){
      return "-"+amount;
    } return amount;
}