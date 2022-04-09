//function to display colors array
function getColors() {
    axios.request({
        method:"GET",
        url:"https://reqres.in/api/unknown"
    }).then(colorsSuccess).catch(colorsFail);
}

function colorsSuccess (response) {
    console.log(response);
    document.getElementById("color").innerText = response.data[0].color;
    document.getElementById("colorName").innerText = response.data[0].name;
    document.getElementById("colorYear").innerText = response.data[0].year;
}

function colorsFail (error) {
    console.log(error);
}
//to display the colors upon loading
window.addEventListener('load', getColors);

//im not really understanding how to display arrays still