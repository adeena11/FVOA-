import { useEffect } from 'react';
import '../welcome_admin/welcome_Admin.css';

const WelcomeWriter = () => {
    useEffect(() => {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"30730741c8f227b8cb431c06a08964c2a","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
 
      }, []);
    return (  
        <div className="admin_welcome_container">
        <h1 className='welcome_title'> WELCOME TO TRAINEE DASHBOARD </h1>
        <p className='welcome_description'> Let's Start Your Training! </p>
        <div className='image_container'> 
        </div>
        </div>
    );
}
 
export default WelcomeWriter;