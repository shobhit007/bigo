$(document).ready(function(){
    var style = [
        {
            bg: "#d3e4cd",
            h2: "#f0a500",
            p: "black"
        },
        {
            bg: "#3e065f",
            h2: "white",
            p: "#f0a500"
        },
        {
            bg: "#32502e",
            h2: "white",
            p: "#f3efcc"
        },
        {
            bg: "#6684a1",
            h2: "white",
            p: "black"
        }
    ]
    
    var container = $(".container")
    var h2 = $("h2")
    var p = $("p")
    var i = 0
    var j = 4
    
    $(".next").click(function(){
        i++
        if (i > 3) {
            i = 0
            container.css("background-color", `${style[i].bg}`)
            h2.css("color", `${style[i].h2}`)
            p.css("color", `${style[i].p}`)
        }else {
            container.css("background-color", `${style[i].bg}`)
            h2.css("color", `${style[i].h2}`)
            p.css("color", `${style[i].p}`)
        }
        console.log(i)
    })

    $(".previous").click(function(){
        i--
        if (i < 0) {
            i = 3
            container.css("background-color", `${style[i].bg}`)
            h2.css("color", `${style[i].h2}`)
            p.css("color", `${style[i].p}`)
        }else {
            container.css("background-color", `${style[i].bg}`)
            h2.css("color", `${style[i].h2}`)
            p.css("color", `${style[i].p}`)
        }
        // if (i <= 0) {
        //     i = 0
        //     container.css("background-color", `${style[i].bg}`)
        //     h2.css("color", `${style[i].h2}`)
        //     p.css("color", `${style[i].p}`)
        //     j = 4
        // }else {
            
        // }
        console.log(i)
    })
})