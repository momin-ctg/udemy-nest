import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private task: Task[] = [];

  getAllTask(): Task[] {
    return this.task;
  }

  getTaskById(id: string): Task {
    return this.task.find(task => task.id === id);
  }

  deleteTask(id: string): void {
    this.task = this.task.filter(task => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.task.push(task);
    return task;
  }
}
