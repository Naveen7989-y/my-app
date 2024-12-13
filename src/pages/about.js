import './about.css';

const About=()=> {
    return(
        <>
        <div id="Header">
        <div id="navcontainer">
        

            <div id="aboutslider">
                <img class="Aboutimg1" id="Aboutimg1" src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p3-title-img-1.jpg"/>
               
            </div>
        </div>

            <div id="oncontainer">
            <div  class="Aboutcoffee">
                ABOUT US
            </div>

            
            
            </div>
        </div>
        <div id="flowerlogo">
            <center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-above.png"/></center>
            <center><p>"Fuel your day with the bold, rich taste of Robusta coffee—packed with double the caffeine for extra energy!"</p></center>
        </div>
        
        <div id="aboutgrid2">
                <div>
                    <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p2-img-2.jpg"/>
                    <p>"Robusta coffee: the perfect blend of bold flavor and unbeatable strength, crafted for those who crave intensity."</p>

                </div>
                <div>
                    <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p2-img-3.jpg"/>
                    <p>"Experience the intense flavor of Robusta coffee—strong, earthy, and brewed to awaken your senses."</p>
                </div>
        </div>
        <div id="testimonials" style={{background:"url(https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p2-parallax-img-1.jpg)",height:"400px",backgroundSize:"cover"}}>
            <h1 style={{fontSize:"60px",fontWeight:"350",color:"whitesmoke"}}>TESTIMONILAS</h1>
            <img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/title-separator-white.png"/>
            <p style={{color:"white",padding:"0px 300px 0px 300px"}}>"See why coffee lovers rave about our bold, rich brews—your perfect cup is just a sip away!"

                            "Our customers say it best: 'The smoothest, most flavorful coffee I've ever tasted!'"

                            "Real reviews, real flavor: Discover why our coffee is the talk of every morning routine!"</p>
            <p style={{fontSize:"25px,",color:"whitesmoke"}}>JEAN THOMSON,barista</p>


        </div>
        <div id="numbersgrid">
        <div>
                <h1><center>257</center></h1>
                <center><h2>VARIETIES OF COFFEE</h2></center>
                <div>Cappuccino – A shot of espresso topped with equal parts steamed milk and milk foam</div>
            </div>
            <div>
                <h1><center>123</center></h1>
                <center><h2>HOURS OF TESTING</h2></center>
                <div>Cappuccino – A shot of espresso topped with equal parts steamed milk and milk foam</div>
            </div>
            <div>
                <h1><center>221</center></h1>
                <center><h2>COFFEE MAKERS</h2></center>
                <div>Cappuccino – A shot of espresso topped with equal parts steamed milk and milk foam</div>
            </div>
            <div>
                <h1><center>124</center></h1>
                <center><h2>COFFEE BRANDS</h2></center>
                <div>Cappuccino – A shot of espresso topped with equal parts steamed milk and milk foam</div>
            </div>
        </div>
        <div id="quotes">
            <p>"If it wasn’t for coffee, I’d have no discernible personality at all.</p>
            <button id="ctnbtn">CONTACT US</button>
        </div>
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
    

        </>
    );
} 
export default About;