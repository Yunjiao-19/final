$(".weather-item").click(function() {
    var src = $(this).find("img").attr("src");
    var weather = "";
    console.log(src);

    if (src.includes("sunny")) {
        weather = "Happy"
    } else if (src.includes("Rainy")) {
        weather = "Upset"
    } else if (src.includes("lightning")) {
        weather = "Angry"
    } else {
        weather = "Worried"
    }

    $(".my-weather").prop("src", src);
    $(".choright").find("p").find("span").text(weather);
});