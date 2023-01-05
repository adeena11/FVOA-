Object.defineProperty(exports, "__esModule", { value: true });
exports.projectData = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2022'),
        EndDate: new Date('04/12/2022'),
        subtasks: [
            { TaskID: 2, TaskName: 'SCOPE', StartDate: new Date('04/06/2022'), Duration: 4, Progress: 50,Predeceesor:"1FS",
             resources: [{resourceId: 1, unit: 70}, 6]},
            { TaskID: 3, TaskName: 'SRS', StartDate: new Date('04/10/2022'), Duration: 4, Progress: 50, Predeceesor:"2FS" ,resources:[2,3,5]},
            { TaskID: 4, TaskName: 'SDS', StartDate: new Date('04/12/2022'), Duration: 4, Progress: 50 ,Predeceesor:"3FS",
            
        }
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Implementation',
        StartDate: new Date('04/12/2022'),
        EndDate: new Date('05/10/2022'),
        
        subtasks: [
            { TaskID: 6, TaskName: '40%', StartDate: new Date('04/12/2022'), Duration: 3, Progress: 50 ,Predeceesor:"5FS"},
            { TaskID: 7, TaskName: '60%', StartDate: new Date('04/24/2022'), Duration: 3, Progress: 50 ,Predeceesor:"6FS"},
            { TaskID: 8, TaskName: '80%', StartDate: new Date('05/10/2022'), Duration: 3, Progress: 50 ,Predeceesor:"7FS"}
        ]
    },
];

exports.resourceDetails = [
{ resourceId: 1, resourceName: 'Ali'},
{ resourceId: 2, resourceName: 'Ahmad' },
{ resourceId: 3, resourceName: 'Ayesha'},
{ resourceId: 4, resourceName: 'Uzair'},
{ resourceId: 5, resourceName: 'Adeena' },
{ resourceId: 6, resourceName: 'Yumna' },
];