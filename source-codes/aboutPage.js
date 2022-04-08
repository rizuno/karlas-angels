// $(".codeFlashCard").click(function() {
//     var code_name = $(this).find("p").attr("value");
//     console.log(code_name);
//     $.getJSON('./data2.json', function(data) {
//         var html = data[code_name].html;
//         $(".flipCardContainer").html(html);
//     })
// });

function loadData(member) {
    $.getJSON('./data.json', function(data) {
        var skills = data["members"]["member1"][0]["skills"];
        //console.log(data["members"]["member1"][0]["skills"])
        var interests = data["members"]["member1"][1]["interests"];
        var shopImage = data["members"]["member1"][2]["shopDetails"];

        $(".skillsContainer > p").remove("p");
        for (var skill in skills) {
            $(".skillsContainer").append("<p>" + skills[skill] + "</p>")
        }
        $(".interestContainer > p").remove("p");
        for (var interest in interests) {
            $(".interestContainer").append("<p>" + interests[interest] + "</p>")
        }
        $("#shopPreviewImage").attr("src", "testattrb")
    })
}
$(window).load(function() {
    $.getJSON('./data.json', function(data) {
        // var skills = data["members"]["member1"][0]["skills"];
        // //console.log(data["members"]["member1"][0]["skills"])
        // var interests = data["members"]["member1"][1]["interests"];
        // var shopImage = data["members"]["member1"][2]["shopDetails"];

        // $(".skillsContainer > p").remove("p");
        // for (var skill in skills) {
        //     $(".skillsContainer").append("<p>" + skills[skill] + "</p>")
        // }
        // $(".interestContainer > p").remove("p");
        // for (var interest in interests) {
        //     $(".interestContainer").append("<p>" + interests[interest] + "</p>")
        // }
        // $("#shopPreviewImage").attr("src", "testattrb")
        loadData("member1");
    })
})

$(".iconMember").click(function() {
    var currentMember = $(this);
    currentMember.css({
        filter: "grayscale(0%)",
    })
    $(this).siblings().animate({
        height: "230px",
        width: "230px",
        transform: "translate(0, -125px)"
    });
    $(this).siblings().css({
        filter: "grayscale(100%)",
    })
    $(this).animate({
        height: "380px",

        width: "380px",
        filter: "grayscale(100%)",
        transform: "translate(0, -180px)"
    }, function() {

    });

    $(this).siblings().removeClass("active");
    $(this).siblings().addClass("TestClass");
    var current_member = $(this).attr("value")
    loadData()

})