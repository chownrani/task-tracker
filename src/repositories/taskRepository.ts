import type { Task } from "../domain/generated/prisma/browser";
import type { TaskCreateInput } from "../domain/generated/prisma/models";
import { prisma } from "../database/database";

export class TaskRepository {
    async createTask(task: TaskCreateInput): Promise<Task> {
        return prisma.task.create({
            data: task,
        });
    }
}
