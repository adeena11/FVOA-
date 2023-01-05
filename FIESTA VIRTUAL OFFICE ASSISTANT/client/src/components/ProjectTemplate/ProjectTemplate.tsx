import React from 'react';
import './styles.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective,  Edit , Inject, Toolbar, Selection } from '@syncfusion/ej2-react-gantt';
import { projectData } from './data';
import { resourceDetails} from './data';
function ProjectTemplate() {
  
  const editOptions: any = {
  allowEditing: true,
  allowAdding:true,
  allowDeleting:true,
  allowSelection:true,
  allowTaskbarEditing:true,
  mode: "Auto" 
}
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predeceesor",
    resourceInfo: "resources"
  }
  return (
    <div className='project_container'>
        <h2 style={{marginLeft: '40%'}}>PROJECT GANTT CHART</h2>
      {/* To change timeline view add timelineSettings={{timelineViewMode: "Day"} in below tag} */}
      <GanttComponent style={{width: '90%', marginLeft: '5%'}} dataSource={projectData}  taskFields={taskValues} resources={resourceDetails}
       editSettings={editOptions}  
       resourceFields={{id:"resourceId", name: "resourceName"}}
      toolbar={['Add' , 'Edit' , 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll']}>
        <Inject services={[Edit , Toolbar, Selection]}></Inject>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
          <ColumnDirective field="StartDate" format="dd-MMM-yy"></ColumnDirective>
          <ColumnDirective field="Duration" textAlign="Right"></ColumnDirective>
          <ColumnDirective field="Resources"  headerText="Resources" textAlign="Right"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default ProjectTemplate;