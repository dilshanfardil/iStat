

$(document).ready(function () {
    
    $("#btnSubmit").click(function () {
        console.alert("hi");
        var formData = $("#frmUser").serializeArray();

        $.ajax("http://localhost:8080/user/add",{
            contentType: 'application/x-www-form-urlencoded',
            data:formData,
            dataType: 'json',
            method:'POST'
        }).done(function (json) {
            console.log("Contraoller");
            if (json.result==="success") {
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

