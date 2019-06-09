$("#gras").click(function(){
    $("p").css('font-Weight','bold')
});

$("#italique").click(function(){
    $("p").css('font-style','italic')
});

$("#souligner").click(function(){
    $("p").css('text-decoration','underline')
});

$("#dropbtn").on("change",function(){
    $("p").css('font-family',$("#dropbtn").val())
});

$("#dropbtn2").on("change",function(){
    $("p").css('font-size',$("#dropbtn2").val())
});