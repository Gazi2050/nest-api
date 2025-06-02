import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

//incoming request and returning responses
// get , post,put,delete
//localhost:3000/hello
@Controller('hello')
export class HelloController {
    //dependency injection
    constructor(private readonly helloService: HelloService) { }

    @Get()
    getHello(): string {
        return this.helloService.getHello()
    }
}
