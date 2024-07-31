import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('add')

  addNumber(){

    return { Hi:'hellow Dilan' };

  }
   //Adding two Numbers
  @Post('add')

  postNumber(@Body() body: {n1:number , n2:number}){

    return this.appService.sum(body.n1, body.n2);
  }

 //Substraction Two Numbers
  @Post('sub')

  substract(@Body() body: {n1:number , n2:number}){
    
    return this.appService.substract(body.n1, body.n2);

  }


  //Multifi Two Numbers
  @Post('multi')

  multifi(@Body() body: {n1:number , n2:number}){
    
    return this.appService.multifi(body.n1, body.n2);

  }



//Devide Two Numbers
  @Post('devide')

  devition(@Body() body: {n1:number , n2:number}){
    
    return this.appService.devition(body.n1, body.n2);

  }




}
