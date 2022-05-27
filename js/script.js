// -----------------------------moviesApi--------------------------------------------------------
let myHttP = new XMLHttpRequest;
let allPosts = [];
myHttP.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");

myHttP.send();
myHttP.addEventListener('readystatechange', () => {
    if (myHttP.readyState == 4 && myHttP.status == 200) {
        allPosts = JSON.parse(myHttP.response).results;
        console.log(allPosts);
    }
    displayPost();
})
displayPost = () => {
    let cartonna = ``;
    for (let i = 0; i < allPosts.length; i++) {
        cartonna += `<div class="col-md-4"> 
<div class="post m-4">

<div class="view text-center  d-flex flex-column justify-content-center align-items-center">
<div>
                    <h3>${allPosts[i].title}</h3>
                </div>
                <div>
                    <p>${allPosts[i].overview}</p>
                </div>
                <div>
                <p>${allPosts[i].vote_average}</p>
            </div>
            <div>
            <p>${allPosts[i].release_date}</p>
        </div>
</div>
<img class="w-100" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" alt="">
</div>
    
</div>`
    }
    document.getElementById("postRow").innerHTML = cartonna;
}
// -------------------------------Search------------------------------------------------------
byScreen = () => {
    let screenSearch = document.getElementById("byScreen");
    screenSearch.addEventListener('input', (e) => {
        let char = e.target.value;
        let cartonna = ``;
        for (let i = 0; i < allPosts.length; i++) {
            if (allPosts[i].title.toLowerCase().includes(char.toLowerCase())) {
                cartonna += `<div class="col-md-4"> 
                <div class="post m-4">

                <div class="view text-center d-flex flex-column justify-content-center align-items-center">
                <div>
                                    <h3>${allPosts[i].title}</h3>
                                </div>
                                <div class="mb-5 p-5">
                                    <p>${allPosts[i].overview}</p>
                                </div>
                                <div class="m-5">
                                <p >${allPosts[i].vote_average}</p>
                            </div>
                            <div class="m-5">
                            <p > ${allPosts[i].release_date}</p>
                        </div>
                </div>
                <img class="w-100" src="https://image.tmdb.org/t/p/w500${allPosts[i].poster_path}" alt="">
                </div>
                    
                </div>`
            }
            document.getElementById("postRow").innerHTML = cartonna;
            // displayPost();
        }
    })

}
byScreen();

// -------------------------------sideMenu------------------------------------------------------
$(document).ready(() => {
    let menueStatues = $("#menuOption").outerWidth();
    $("#sideMenu").animate({ left: -menueStatues }, 0);
});
$("#alignButton").click((e) => {
    let menuOptionWidth = $("#menuOption").outerWidth();
    if ($("#sideMenu").css("left") == "0px") {
        e.target.className = `fa fa-align-justify`;
        $("#sideMenu").animate({ left: -menuOptionWidth }, 500);
        // $(selector).show();
        $("a").hide(400);
    }
    else {
        e.target.className = `fa fa-align-justify fa-times`;
        // console.log($("#sideMenu").css("left"));
        $("#sideMenu").animate({ left: `0px` }, 600, () => {
            $("#playing").slideDown(180, () => {
                $("#Popular").slideDown(180, () => {
                    $("#Rated").slideDown(180, () => {
                        $("#Trending").slideDown(180, () => {
                            $("#Upcoming").slideDown(180, () => {
                                $("#Contact").slideDown(180);
                            })
                        })
                    })
                })
            })
        });

    }
});
// =================================contactUs=================================
let userName = document.getElementById("UserName");
let userEmail = document.getElementById("Email");
let userPhoneNumber = document.getElementById("PhoneNumber");
let userAge = document.getElementById("Age");
let userPassword = document.getElementById("Password");
let userRePassword = document.getElementById("RePassword");
let testData = document.getElementsByClassName("test");

let valid;
userName.addEventListener('input', (e) => {
    let regex_name = /([a-z]|[A-Z]|\d)/;
    valid = regex_name.test(e.target.value);
    console.log(valid);
    if (valid == false) {
        testData[0].style.display = 'block';
    }
    else {
        testData[0].style.display = 'none';
    }
})
userEmail.addEventListener('input', (e) => {
    let regex_email = /^\w{1,}(@)\D{1,5}(\.com)$/;
    valid = regex_email.test(e.target.value);

    if (valid == false) {
        testData[1].style.display = 'block';
    }
    else {
        testData[1].style.display = 'none';
    }
})
userPhoneNumber.addEventListener('input', (e) => {
    let regex_number = /^(\d{2})?(0)(10|11|12|15)\d{8}$/;
    valid = regex_number.test(e.target.value);
    if (valid == false) {
        testData[2].style.display = 'block';
    }
    else {
        testData[2].style.display = 'none';
    }
})
userAge.addEventListener('input', (e) => {
    let regex_Age = /^(\d|(\d)(\d)|100)$/;
    valid = regex_Age.test(e.target.value);
    if (valid == false) {
        testData[3].style.display = 'block';
    }
    else {
        testData[3].style.display = 'none';
    }
})
userPassword.addEventListener('input', (e) => {
    let regex_password = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
    valid = regex_password.test(e.target.value);
    if (valid == false) {
        testData[4].style.display = 'block';
    }
    else {
        testData[4].style.display = 'none';
    }
})
userRePassword.addEventListener('input', (e) => {
    let regex_password = userPassword.value;
    let regex_repasswor = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
    valid = e.target.value;
    if (regex_repasswor.test(valid) == false || valid !== regex_password) {
        testData[5].style.display = 'block';
    }
    else {
        testData[5].style.display = 'none';
    }
})