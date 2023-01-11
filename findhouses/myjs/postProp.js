

// const payload = ""

function selector(event) {
    // console.log(event.target.value);
}

function personalDetail(arg) {
    if(arg === 'owner'){
        document.getElementById("perDetFormCont").innerHTML = 
        `<div class="name">
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
        </div>`
    }else {
        document.getElementById("perDetFormCont").innerHTML = ""
    }
}