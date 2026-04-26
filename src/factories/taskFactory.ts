import type { TaskCreateInput } from "../generated/prisma/models/Task";

export class TaskFactory {
    static createTask(title: string, description: string | null): TaskCreateInput {
        if (!title || title.trim() === "") {
            throw new Error("Title is required and cannot be empty.");
        }

        title = title.trim();

        return {
            title: title,
            description: description?.trim() === "" ? null : description,
        }
    }
}