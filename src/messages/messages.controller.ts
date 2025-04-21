import { Controller, Get, Post, Body, Param, HttpCode, NotFoundException} from '@nestjs/common';
import { CreateMessageDto} from "./Dtos/createMessage.dto";
import {  messagesService } from "./messages.service";
@Controller('messages') // class decorator
export class MessagesController {

    messagesServe: messagesService
    constructor(){
        this.messagesServe = new messagesService();
    }

    @Get() // method decorator 
    listMessages(){
       return this.messagesServe.findAll()
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        this.messagesServe.create(body.content)
       
    }
    @Get("/:id")
    async getMessage(@Param("id") id :string){
      const msg = await this.messagesServe.findOne(id)

      if(!msg){
        throw new NotFoundException("message not found!!")
      }

      return msg
    }
    
}
