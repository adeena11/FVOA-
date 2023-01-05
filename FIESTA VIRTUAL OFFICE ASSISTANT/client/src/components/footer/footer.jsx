import React from "react";
import './footer.css'
import { FaTasks } from 'react-icons/fa'
import { MdOutlineGroups, MdPayment } from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const Footer = () => {
    return ( 
        <div className="footer_container">
            <div className="feature">
               <div className="icon"> <MdOutlineGroups/> </div>
                <p className="fea">  Team Communication </p>
                <p className="desc">Allows you to communicate with your team effectively</p>
            </div>
            <div className="feature">
            <div className="icon"> <FaTasks/> </div>
                <p className="fea"> Task Monitoring</p>
                <p className="desc">Easy task allocation and submission</p>
            </div>
            <div className="feature">
                <div className="icon"> <AiOutlineFundProjectionScreen/> </div>
                <p className="fea"> Project Management</p>
                <p className="desc">Allows you manage multiple projects at a time. Give you insights of ongoing projects</p>
            </div>
            <div className="feature">
                <div className="icon"> <MdPayment/> </div>
                <p className="fea"> Payment Managemnet</p>
                <p className="desc">Manages task payment automatically, providing you an easy way to pay your team.</p>
            </div>
        </div>
     );
}
 
export default Footer;