import { MessagesRepository} from "./messages.repository";
export class messagesService{

    messagesRepo:MessagesRepository;
    constructor(){
        // Creating its Deppendencies on its own while we dont do this normally

        this.messagesRepo = new MessagesRepository();
    }

    
        findOne(id: string){
            return this.messagesRepo.findOne(id)
        }
    
        findAll(){
            return this.messagesRepo.findAll()
        }
    
        async create(message: string){
          return this.messagesRepo.create(message)
        }

}