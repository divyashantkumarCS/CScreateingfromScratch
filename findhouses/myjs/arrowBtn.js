
const featuredScrollCont = document.getElementById("featuredScrollCont");

const recentlyScrollCont = document.getElementById("recentlyScrollCont");

const blogScrollCont = document.getElementById("blogScrollCont");

function scrollLeftFun(arg) {
    // console.log("hello left Button")
    // scrollCont.scrollLeft = "200px"
    if(arg === 'featured'){
        featuredScrollCont.scrollBy(-309, 0);
    }
    if(arg === 'recently') {
        recentlyScrollCont.scrollBy(-309, 0);
    }
    if(arg === 'blog'){
        blogScrollCont.scrollBy(-309, 0);
    }
}

function scrollRightFun(arg) {
    // console.log("hello right Button")
    if(arg === 'featured'){
        featuredScrollCont.scrollBy(309, 0);
    }
    if(arg === 'recently') {
        recentlyScrollCont.scrollBy(309, 0);
    }
    if(arg === 'blog'){
        blogScrollCont.scrollBy(309, 0);
    }
}