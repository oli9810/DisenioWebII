$("#hive").click(
    function () { 
        $("#img1").fadeOut(2000)
        $("#table1").fadeOut(2000);
    }
);

$("#show").click(
    function () { 
        $("#img1").fadeIn(3000)
        $("#table1").fadeIn(3000);
    }
);

$("#io").click(
    function () { 
        $("#img1").toggle("slow")
        $("#table1").toggle("slow");
    }
);