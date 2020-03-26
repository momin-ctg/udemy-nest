import {Injectable} from '@nestjs/common';

@Injectable()
export class TaskService {
    private task = [];

    getAllTask() {
            return this.task
    }
}
