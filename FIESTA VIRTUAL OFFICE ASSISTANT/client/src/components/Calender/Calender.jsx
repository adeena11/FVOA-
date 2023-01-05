import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@material-ui/core";


const Calendarschedule = () => {

    const locales = {
        "en-US": require("date-fns/locale/en-US"),
    };
    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    });


    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState();

    function handleAddEvent() {

        for (let i = 0; i < allEvents.length; i++) {

            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            /*
                console.log(d1 <= d2);
                console.log(d2 <= d3);
                console.log(d1 <= d4);
                console.log(d4 <= d3);
                  */

            if (
                ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
                    (d4 <= d3))
            ) {
                alert("CLASH");
                break;
            }

        }


        setAllEvents([...allEvents, newEvent]);
    }
    return (
        <div style={{ width: '100%', height: '100vh', backgroundColor: '#f7f7f7' }}>
            <h1>Calendar</h1>

            <div style={{ display: 'flex' }}>

                <div style={{ width: '100%', height: '60vh' }}>

                    <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ width: '90%', margin: "50px" }} />
                </div>
                <div style={{ width: '20%', height: '10vh' }}>
                    <h2>Add New Event</h2>

                    <input type="text" placeholder="Add Title" style={{ width: "80%",  marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                    <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                    <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    );

}
export default Calendarschedule;

