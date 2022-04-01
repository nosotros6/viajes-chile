$(function () {
    $(".textointro").dblclick(function(){
        $(this).css({
            color: "aqua"
        })
    })
    
    $("#btncontacto").click(function(){
        alert("El correo fue enviado correctamente")
    })

    $("#icfooter1").click(function(){
        alert("Rumbo a nuestra cuenta Git Hub")
    })

    $("#icfooter2").click(function(){
        alert("Rumbo a nuestra cuenta Linkedin")
    })

    $("#icfooter3").click(function(){
        alert("Rumbo a nuestra cuenta Twiter")
    })

    $("#icfooter4").click(function(){
        alert("Rumbo a nuestra cuenta Facebook")
    })

    $(".button").click(function(){
        $("p").toggle()
    })
})
