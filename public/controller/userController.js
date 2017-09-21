

$(document).ready(function () {
    
    $("#btnGo").click(function () {
        var formData = $("#frmUser").serializeArray();
        alert(JSON.stringify(formData));
        $.ajax("http://localhost:8080/user/add",{
            contentType: 'application/x-www-form-urlencoded',
            data:formData,
            dataType: 'json',
            method:'POST'
        }).done(function (json) {
            var a =JSON.stringify(json);
            console.log(a);
            alert(a);
            console.log("Contraoller");
            if (json.result=="success") {
                // alert("saASSA")
                $("#status").html("Customer has been successfully added...");
            }else{
                $("#status").html("OOPs Somting Went Wrong...");
            }

            $("#txtUserName").val("");
            $("#txtEmail").val("");
            $("#txtpwd").val("");

        });
    });
    
});

