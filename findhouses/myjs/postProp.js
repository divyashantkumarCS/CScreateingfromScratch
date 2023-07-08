
function checkPosition(ev) {
    // console.log("window.scrollY")
    // console.log(window.scrollY);
    
    if (window.scrollY >= 1400) {
        document.querySelector('.formCont').style.position = "absolute";
        document.querySelector('.formCont').style.top = "1400px";
    }else {
        document.querySelector('.formCont').style.position = "fixed";
        document.querySelector('.formCont').style.top = "75px";
    }
} 

function personalDetail(arg) {
    if(arg === 'owner'){
        document.getElementById("perDetFormCont").innerHTML = `<div class="name">
                                                                    <p class="customLabel">Name</p>
                                                                    <input type="text" name="name" id="name" placeholder="Enter Your Name">
                                                                </div>
                                                                <div class="mobile">     
                                                                    <p class="customLabel">Mobile</p>   
                                                                    <div class="mobCont">
                                                                        <p>IND +91</p>
                                                                        <input type="text" id="mob" name="mobile" placeholder="Enter Your Mobile">               
                                                                    </div> 
                                                                </div>
                                                                <div class="email">
                                                                    <p class="customLabel">Email</p>
                                                                    <input type="text" name="email" id="email" placeholder="Enter Your Email">
                                                                </div>`;

        document.getElementById("checkboxCont").innerHTML =`<div>
                                                                <input type="checkbox" id="checkboxOne" checked>
                                                                <label for="checkboxOne">I am posting this property 'exclusively' on CheckedSpot</label>
                                                            </div>
                                                            
                                                            <div>
                                                                <input type="checkbox" id="checkboxTwo" checked>
                                                                <label for="checkboxTwo">
                                                                    I agree to CheckedSpot <a href="#">T&C</a>, 
                                                                    <a href="#">Privacy Policy</a>, & 
                                                                    <a href="#">Cookie Policy</a>
                                                                </label>
                                                            </div>

                                                            <div>
                                                                <input type="checkbox" id="checkboxThree" checked>
                                                                <label for="checkboxThree">
                                                                    I want to receive responses on <a href="#" class="">Whatsapp</a>
                                                                </label>
                                                            </div>`;

    }else {
        document.getElementById("perDetFormCont").innerHTML = "";

        document.getElementById("checkboxCont").innerHTML = `<div>
                                                                <input type="checkbox" id="checkboxTwo" checked>
                                                                <label for="checkboxTwo">
                                                                    I agree to CheckedSpot <a href="#">T&C</a>, 
                                                                    <a href="#">Privacy Policy</a>, & 
                                                                    <a href="#">Cookie Policy</a>
                                                                </label>
                                                            </div>`;

    }
}