import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    getInfoAboutProject () {
        return {
            projectName: 'LeeChat',
            apiVersion: '0.0.1',
        }
    }
}