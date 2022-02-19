import {Controller, Get} from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get('/info')
    getInfo() {
        return ({
            projectName: 'LeeChat',
            apiVersion: '0.0.1',
        })
    }
}