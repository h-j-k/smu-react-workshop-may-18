export const calculate = (chargeable_income) => {
    //range from 20_000 to 80_000
    if(chargeable_income<=20000){
        return 0;
    }else if (chargeable_income<=30000){
        return (chargeable_income-20000)*0.02;
    }else if(chargeable_income<=40000){
        return ((chargeable_income-30000)*0.035)+200;
    }else if(chargeable_income<=80000){
        return ((chargeable_income-40000)*0.07)+550;
    }
}
