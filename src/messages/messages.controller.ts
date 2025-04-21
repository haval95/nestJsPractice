import { Controller, Get, Post, Body, Param, HttpCode} from '@nestjs/common';
import { CreateMessageDto} from "./Dtos/createMessage.dto";

@Controller('messages') // class decorator
export class MessagesController {

    @Get() // method decorator 
    //body and params are argument decos 
    listMessages(){
        return "hey"

    }
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        console.log(body)
    }
    @Get("/:id")
    getMessage(@Param("id") id :string){
         console.log(id)
    }
    
}
