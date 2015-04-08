/**
 * Created by snehas on 3/24/15.
 */

function upload()
{
    var client = new XMLHttpRequest();
    var file = document.getElementById("tracefile");
    /* Create a FormData instance */
    var formData = new FormData();
    /* Add the file */
    formData.append("tracefile", file.files[0]);


    client.open("POST", "http://localhost:9998/webapp/tracemanagement/upload_trace", true);
    client.send(formData);  /* Send to server */

    client.onreadystatechange = function()
    {
        if (client.readyState == 4 && client.status == 200)
        {
            alert("Done!");
        }
    }
}
/* Check the response status */


function login() {
    console.log("UGH!");
    console.log(document.getElementById("inputEmail"));
    document.location.href = "dashboard.html";
    location.reload();
    if(document.getElementById("inputEmail") == "benchlab")
    {
        if(document.getElementById("inputPassword") == "benchlab")
        {
            alert("done");
            document.location.href = "dashboard.html";
            location.reload();
        }
    }
}