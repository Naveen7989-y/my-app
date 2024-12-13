import './contact.css';


const Contact=()=>{
    return(
        <>
        
        
         <div id="Header">
                   <div id="aboutslider">
                <img class="Aboutimg1" id="Aboutimg1" src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p3-title-img-1.jpg"/>
               
            </div>
        </div>

            <div id="oncontainer">
            <div id="coffeemasters" class="Aboutcoffee">
                CONTACT US
            </div>

            
            
            </div>
       
        <div id="contactgrid2">
            <div id="getintouch">
                <h1>GET IN TOUCH</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </p>
                <ul>
                    <li>Duis aute irure dolor</li>
                    <li>Duis aute irure dolor</li>
                    <li>Duis aute irure dolor</li>
                    <li>Duis aute irure dolor</li>
                </ul>
                <div>


                </div>
            </div>

            <div id="inputbox">
                <div id="namediv"><input type="text" placeholder="Your Name" class="name"/><input type="email" placeholder="Your Email" class="name"/></div>
                <div id="subinputbox">
                    <input id="contactsubject" type="text"  placeholder="SUBMIT" />
                    <input id="contactmessage" type="Message" placeholder="MESSAGE"/> 
                    <center><button id="contactsubmit">Submit</button></center>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.180379084517!2d78.37941957390751!3d17.451078600969684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b40eed7595%3A0x30330650437ad205!2sTeks%20Academy!5e0!3m2!1sen!2sin!4v1727701626638!5m2!1sen!2sin" style={{width:"100%",height:"500px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div id="footer">
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/logo-footer-sidearea.png"/>
            <p>Never steal a man’s coffee. - Anthony T. Hincks
            </p>
            <h2>STORES</h2>
            <p>Dunsmuir Ave, Los Angeles, CA 90036, USA

Atkins Ave, Brooklyn, NY 11208, USA</p>
                <p>NEWS AS FRESH AS COFFEE</p>
                <div>
                <input type="text" placeholder="Your Email Address">
                </input>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
</svg>
                </button>
                </div>
        </div>
        <div id="lastfooter" >
            <div><p>© 2018 Qode Interactive, All Rights Reserved</p></div>
            <div id="footernav">
                <div>HOME</div>
                <div>ABOUT</div>
                <div>SHOP</div>
                <div>CONTACT</div>
            </div>
            <div id="medialogos"></div>
            
        </div>


        
        
        </>
    );
}
export default Contact;