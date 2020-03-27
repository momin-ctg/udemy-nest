import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {
  }

  @Get() getAllTask(): Task[] {
    return this.taskService.getAllTask();
  }

  @Post()
  createTask(@Body('title') title: string,
             @Body('description') description: string) {
    console.log('title', title);
    console.log('description', description);
  }
}
