function readMore(event, pId) {
    // console.log(event.target);
    event.target.style.display = "none"
    document.getElementById(pId).style.whiteSpace = "normal";
}

function readLess(sId, pId) {
    document.getElementById(sId).style.display = "block";
    document.getElementById(pId).style.whiteSpace = "nowrap";
}

function displayPropOpt(btn, row) {
    const flatDetail = document.getElementById(row);
    if(flatDetail.style.display === "none" || flatDetail.style.display === ""){  
        flatDetail.style.display = "flex";
        document.getElementById(btn).innerHTML = '<i class="fa fa-angle-up"></i>'
    }else {        
        flatDetail.style.display = "none";
        document.getElementById(btn).innerHTML = '<i class="fa fa-angle-down"></i>'   
    }
}