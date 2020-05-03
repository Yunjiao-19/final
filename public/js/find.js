$("h6").on("click", ".follow-btn", function() {
    followedState = "Edgar Pinto<span class='badge badge-pill badge-secondary followed-btn'>followed</span>";

    $(".follow-btn").parent().html(followedState);
});

$("h6").on("click", ".followed-btn", function() {
    followState = "Edgar Pinto<button class='badge badge-pill badge-primary follow-btn'>follow+</button>";

    $(".followed-btn").parent().html(followState);
});