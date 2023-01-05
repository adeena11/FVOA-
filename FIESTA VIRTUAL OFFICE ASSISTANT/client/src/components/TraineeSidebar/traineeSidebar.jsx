import React from "react";
import '../adminDashboarrdSidebar/styles.css';

import { GoProject } from 'react-icons/go';
import { MdOutlinePayments } from 'react-icons/md';
import { HiClipboardList } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCalendar2Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const TraineeSidebar = () => {
    return (
        <>
            <div className="sidebar_container">
                <Link to={'/trainee/profile'}>
                    <div className="sidebar_element">
                        <FaUserAlt />
                        <div className="sidebar_text">
                            <p>Profile</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/writer/tasks'}>
                    <div className="sidebar_element">
                        <GoProject />

                        <div className="sidebar_text">
                            <p>Tasks</p>
                        </div>
                    </div>
                </Link>
              
                <Link to={'/trainee/trainingvideos'}>
                <div className="sidebar_element">
                    <BsFillCalendar2Fill />

                    <div className="sidebar_text">
                        <p>Training Videos</p>
                    </div></div>
                </Link>
                
                <Link to={'/trainee/videocall'}>
                <div className="sidebar_element">
                    <BsFillCalendar2Fill />

                    <div className="sidebar_text">
                        <p>Video Call</p>
                    </div></div>
                </Link>
                <Link to={'/trainee/noticeboard'}>
                    <div className="sidebar_element">
                        <HiClipboardList />

                        <div className="sidebar_text">
                            <p>Notice Board</p>
                        </div></div>
                </Link>
                <Link to={'/trainee/Calender'}>
                <div className="sidebar_element">
                    <BsFillCalendar2Fill />

                    <div className="sidebar_text">
                        <p>Calender</p>
                    </div></div>
                </Link>
            </div>
        </>
    );
}

export default TraineeSidebar;