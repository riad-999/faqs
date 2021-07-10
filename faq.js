let QAs = document.querySelectorAll(".qa");
// let full_height = document.getElementById("main-content").
// offsetHeight;
// console.log(full_height);
// document.body
// .style.height = full_height + "px";
QAs.forEach(function(item){
    item.classList.add("no-height");
    // item.querySelector(".answer").
    // classList.add("height-transition");
    item.querySelector(".question").addEventListener("click",function(e)
    {
        e.currentTarget.closest(".qa").classList.toggle("no-height");
        e.currentTarget.closest(".qa").querySelector(".question")
        .classList.toggle("dark-blue");
        e.currentTarget.closest(".qa").querySelector(".btn").
        classList.toggle("rotate");
        // e.currentTarget.querySelector("answer")
        // .classList.toggle("padding");

        // let question_class = 
        // e.currentTarget.querySelector(".question").
        // classList;
        // let closed = question_class.contains("dark-blue");
        // let answer_height = e.currentTarget.querySelector(".answer").
        // firstChild.offsetHeight + "px";
        // console.log(answer_height);
        // let answer = e.currentTarget.querySelector(".answer");
        // if(closed)
        // {
        //     answer.style.height = answer_height;
        // }
        // else
        // {   
        //     answer.style.height = "0";
        // }
        // {
        //     e.currentTarget.style.height = 
        //     e.currentTarget.querySelector(".answer").firstChild
        //     .offsetHeight+"px";
        // }
        // else{
        //     e.currentTarget.
        //     querySelector(".answer").style.height = "0";
        // }

    });
});
