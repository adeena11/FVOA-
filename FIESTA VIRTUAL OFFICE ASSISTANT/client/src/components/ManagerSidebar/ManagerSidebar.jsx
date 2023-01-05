import '../adminDashboarrdSidebar/styles.css';

import { GoProject } from 'react-icons/go';
import { MdOutlinePayments } from 'react-icons/md';
import { HiClipboardList } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCalendar2Fill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ManagerSidebar = () => {
      return (
            <>
                  <div className="sidebar_container">
                        <Link to={'/manager/tasks'}>
                              <div className="sidebar_element">
                                    <GoProject />

                                    <div className="sidebar_text">
                                          <p>Task Allocation</p>
                                    </div>
                              </div>
                        </Link>
                        <Link to={'/manager/project'}>
                              <div className="sidebar_element">
                                    <GoProject />

                                    <div className="sidebar_text">
                                          <p>Project</p>
                                    </div>
                              </div>
                        </Link>
                        <Link to={'/manager/employeeperformance'}>
                              <div className="sidebar_element">
                                    <MdOutlinePayments />

                                    <div className="sidebar_text">
                                          <p>Employee Performance</p>
                                    </div></div>
                        </Link>
                        {/* <Link to={'/writer/chats'}>
                              <div className="sidebar_element">
                                    <BsFillCalendar2Fill />

                                    <div className="sidebar_text">
                                          <p>Video Call</p>
                                    </div></div>
                        </Link> */}
                        <Link to={'/admin/noticeboard'}>
                              <div className="sidebar_element">
                                    <HiClipboardList />

                                    <div className="sidebar_text">
                                          <p>Notice Board</p>
                                    </div></div>
                        </Link >
                        <Link to={'/admin/calender'}>
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

export default ManagerSidebar;