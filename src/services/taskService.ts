import type { TaskCreateInput } from "../domain/generated/prisma/models";
import { TaskRepository } from "../repositories/taskRepository"

export class TaskService {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async createTask(task: TaskCreateInput) {
        try {
            return await this.taskRepository.createTask(task);
        } catch (error) {
            throw new Error("Error creating a new task", { cause: error });
        }
    }
}