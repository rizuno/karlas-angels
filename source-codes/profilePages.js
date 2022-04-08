$(".codeFlashCard").click(function() {
    var code_name = $(this).find("p").attr("value");
    console.log(code_name);
    $.getJSON('./data2.json', function(data) {
        var html = data[code_name].html;
        $(".flipCardContainer").html(html);
    })
});