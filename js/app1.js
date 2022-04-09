function getColors() {
    axios.request({
        method:"GET",
        url:"https://reqres.in/api/unknown"
    }).then(colorsSuccess).catch(colorsFail);
}

function colorsSuccess (response) {
    console.log(response);
    document.getElementById("colors").innerText = response.data;
}

function colorsFail (error) {
    console.log(error);
}