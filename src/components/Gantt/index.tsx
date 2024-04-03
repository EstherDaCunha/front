import React from 'react';
import { Gantt, Task } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
// import { ViewMode } from "gantt-task-react";


export default function Calendario() {

    const tasks: Task[] = [
        {
            start: new Date(2024, 1, 1),
            end: new Date(2024, 1, 2),
            name: 'SSO',
            id: "1",
            type: 'task',
            progress: 26,
            isDisabled: true,
            styles: { progressColor: '#18837E', progressSelectedColor: '#ff9e0d' },
        },

        {
            start: new Date(2024, 4, 6),
            end: new Date(2024, 4, 9),
            name: 'API tasks',
            id: "2",
            type: 'task',
            progress: 45,
            isDisabled: true,
            styles: { progressColor: '#18837E', progressSelectedColor: '#ff9e0d' },
        },

        {
            start: new Date(2024, 4, 1),
            end: new Date(2024, 4, 3),
            name: 'Login',
            id: "3",
            type: 'task',
            progress: 70,
            isDisabled: true,
            styles: { progressColor: '#9E2896', progressSelectedColor: '#ff9e0d' },
        },

        {
            start: new Date(2024, 4, 5),
            end: new Date(2024, 4, 7),
            name: 'Componentes',
            id: "3",
            type: 'task',
            progress: 60,
            isDisabled: true,
            styles: { progressColor: '#9E2896', progressSelectedColor: '#ff9e0d' },
        },


    ];


    return (
        <div className='bg-gray-100 rounded-lg shadow-md p-4'>
            {/* <button className='border border-palette-line w-[70px] h-[30px]' onClick={() => onViewModeChange(ViewMode.Week)}>Week</button> */}
            <Gantt
                tasks={tasks}
            />
        </div>
    )
}
