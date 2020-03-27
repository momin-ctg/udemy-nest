import {Injectable} from '@nestjs/common';
import {Task} from "./task.model";

@Injectable()
export class TaskService {
    private task:Task[] = [];

    getAllTask(): Task[]  {
            return this.task
    }
}
