import {Controller, Get} from '@nestjs/common';
import {TaskService} from './task.service';
import {Task} from './task.model';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {
    }

    @Get() getAllTask(): Task[] {
        return this.taskService.getAllTask();
    }
}
