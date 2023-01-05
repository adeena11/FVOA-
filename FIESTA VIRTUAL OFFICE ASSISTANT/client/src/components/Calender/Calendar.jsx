// import {ViewState, EditingState, IntegratedEditing} from '@devexpress/dx-react-scheduler';
// import {Scheduler, WeekView, Appointments, AppointmentForm} from '@devexpress/dx-react-scheduler-material-ui';
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';


const CalendarScheduler = () => {
    return ( 
         <div style={{width: '80%'}}>
        <ScheduleComponent currentView='Month'>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>

        </div>
     );
}
 
export default CalendarScheduler;