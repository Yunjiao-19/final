var index = 4;

$("#img-upload-btn").prop("disabled", "disabled");

$("#file").change(function() {
    var files = $("#file").prop("files");
    console.log(files);

    var file = files[0];
    var fileName = file["name"];

    $(".img-label").text(fileName);
    $("#img-upload-btn").removeAttr("disabled");
});

$("#img-upload-btn").click(function() {
    console.log(1);

    var files = $("#file").prop("files");
    // console.log(files);
    var file = files[0];
    var imgType = /^image\//;

    // 正则表达式检验文件是否为图片
    if (!imgType.test(file['type'])) {
        alert("Please select an image!");
    } else {
        var reader = new FileReader;

        //图片读取完成的操作
        reader.onload = function(evt) {
            var imgSrc = evt.target.result;

            indicatorHtml = "<li data-target='#carouselExampleIndicators' data-slide-to=" + index +"></li>";
            index ++;
            $("#c-indicator").append(indicatorHtml);

             
            itemHtml = "<div class='carousel-item img-item'><img src=" + imgSrc + " class='d-block w-100' alt='...'></div>"
            $("#c-item").append(itemHtml);

            $(".img-label").text("Choose File...");
            $("#img-upload-btn").prop("disabled", "disabled");
            $("#file").val('');
        }

        reader.readAsDataURL(file);
    }
});