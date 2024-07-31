import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return ' This is a simple  Calculator!';
  }

//adding

  sum(num1: number , num2:number){
    return{total:num1+num2}


  }


  //substraction
  substract(num1:number ,num2:number){

    return{answer:num1-num2}
  }

//Multify
  multifi(num1:number,num2:number){


    return{answer:num1*num2}

   }


  //devition
   devition(num1:number, num2:number){

    return{answer:num1/num2}
   }
}
