import './shop.css';

const Shop=()=>{
    return(
        <>
         <div id="Header">
        <div id="navcontainer">
            
           
            

            <div id="aboutslider">
                <img class="Aboutimg1" id="Aboutimg1" src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/p3-title-img-1.jpg"/>
               
            </div>
        </div>

            <div id="oncontainer">
            <div id="coffeemasters" class="Aboutcoffee">
                PRODUCT LIST
            </div>

            
            
            </div>
        </div>

        <div id="productscontainer">
            

            <div id="shopgrid1">
            <div id="showing"><center><p>Showing 9 off 394</p></center></div>
            <div></div>
            <div id="defsort">
            <select id="options" name="options" placeholder="Default Sorting">
            <option value="option1">Default Sorting</option>
            <option value="option2">Sort by Popularity</option>
            <option value="option3">Sort by average rating</option>
            <option value="option4">Sort by latest</option>
            <option value="option5">Sort by Price</option>
             </select>

            </div>
            <div >
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1-800x800.png"/></center></div>
                <center><h2>ETHIOPIA COFFEE</h2></center>
                <div>$ 22.00</div>
            </div>
            <div >
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-2-800x800.jpg"/></center></div>
                <center><h2>FRENCH PRESS</h2></center>
                <div>$ 22.00</div>
            </div>
            <div>
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1-800x800.png"/></center></div>
                <center><h2>KENYA COFFEE</h2></center>
                <div>$ 23.00</div>
            </div>
            <div>
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1-800x800.png"/></center></div>
                <center><h2>COLUMBIA COFFEE</h2></center>
                <div>$ 25.00</div>
            </div>
            <div>
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1-800x800.png"/></center></div>
                <center><h2>GUATEMALA COFFEE</h2></center>
                <div>$ 21.00</div>
            </div>
            
            <div>
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-6-800x800.jpg"/></center></div>
                <center><h2>KETTLE COFFEE</h2></center>
                <div>$ 21.00</div>
            </div>
            <div>
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1-800x800.png"/></center></div>
                <center><h2>GUATEMALA COFFEE</h2></center>
                <div>$ 21.00</div>
            </div>
            <div >
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-2-800x800.jpg"/></center></div>
                <center><h2>FRENCH PRESS</h2></center>
                <div>$ 22.00</div>
            </div>
            <div >
                <div><center><img src="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/product-img-1-800x800.png"/></center></div>
                <center><h2>ETHIOPIA COFFEE</h2></center>
                <div>$ 22.00</div>
            </div>


            </div>
            <div id="shopgrid2">
                <h1>PRODUCT CATEGORIES</h1>
                <ul id="access3">
                    <li>Accessories</li>
                    <li>Bean varieties</li>
                    <li>Coffee cups</li>
                    <li>Espresso machines</li>
                    <li>French coffee</li>
                    <li>Italian coffee</li>
                </ul>

            </div>



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
export default Shop;