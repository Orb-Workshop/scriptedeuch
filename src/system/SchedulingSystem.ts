import {
    Instance as CSS,
} from "cs_script/point_script";
import { System } from "../base";


// Inspired by Poggiecek
// https://github.com/Source2ZE/cs_script/blob/master/packages/scheduler/src/index.ts

interface Task {
    id: number;
    callback: () => void;
    at_seconds: number;
    every_n_seconds?: number;
}

export default class SchedulingSystem extends System {
    private task_id_pool: number = 0;
    private task_listing: Array<Task> = [];
    
    constructor() {
        super();
    }
    
    public setTimeout(callback: () => void, ms: number) {
        const task_id = this.task_id_pool++;
        this.task_listing.push({
            id: task_id,
            callback,
            at_seconds: CSS.GetGameTime() + ms / 1000.,
        });
        return task_id;
    }

    public setInterval(callback: () => void, ms: number) {
        const task_id = this.task_id_pool++;
        this.task_listing.push({
            id: task_id,
            callback,
            at_seconds: CSS.GetGameTime() + ms / 1000.,
            every_n_seconds: ms / 1000.,
        });
        return task_id;
    }

    private removeTask(id) {
        this.task_listing = this.task_listing.filter((task: Task) => task.id !== id)
    }
    public clearTimeout(id) {this.removeTask(id)};
    public clearInterval(id) {this.removeTask(id)};
    
    override Think() {
        this.task_listing.forEach((task: Task) => {
            const current_game_time = CSS.GetGameTime();
            if (current_game_time < task.at_seconds) return;
            if (task.every_n_seconds === undefined)
                this.removeTask(task.id);
            else {
                task.at_seconds = current_game_time + task.every_n_seconds;
            }

            try {
                task.callback();
            }
            catch (error) {
                CSS.Msg('Scheduling Task Error');
                if (error instanceof Error) {
                    CSS.Msg(error.message);
                    CSS.Msg(error.stack ?? '<no stack>');
                }
            }
        });
    }
}
