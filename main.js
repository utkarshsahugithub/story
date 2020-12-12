function inputData() {
    let form = document.getElementById('form');

    form.addEventListener("submit", function(){
        let jsonData = {
            "animal": document.getElementById('animal').value,
            "anotherAnimal": document.getElementById('anotherAnimal').value,
            "moreAnimal": document.getElementById('moreAnimal').value,
            "adjective": document.getElementById('adjective').value,
            "verbs": document.getElementById('verbs').value,
            "number": document.getElementById('number').value,
            "yes": document.getElementById('yes').checked,
            "speed": document.getElementById('speed').value,
            "qoute": document.getElementById('qoute').value,
            "message": document.getElementById('message').value
        };
        localStorage.setItem( 'objectToPass', JSON.stringify(jsonData));
        window.location = "http://127.0.0.1:5500/story.html";
    });
    form.reset();
}

function storyTeller() {
    let jsonData = localStorage.getItem("objectToPass");
    let parsedData = JSON.parse(jsonData)
    let span = document.getElementsByTagName('span')
    for(let i=0; i<span.length; i++){
        switch(span[i].className) {
            case "animal":
                span[i].innerHTML = parsedData['animal'];
                break;
            case "anotherAnimal": 
                span[i].innerHTML = parsedData['anotherAnimal'];
                break;
            case "moreAnimal":
                span[i].innerHTML = parsedData['moreAnimal'];
                break;
            case "adjective":
                span[i].innerHTML = parsedData['adjective'];
                break;
            case "verbs":
                span[i].innerHTML = parsedData['verbs'];
                break;
            case "number":
                span[i].innerHTML = parsedData['number'];
                break;
            case "yesOrNo":
                span[i].innerHTML = parsedData['yes'] ? "Yes" : "No" ;
                break;
            case "speed":
                span[i].innerHTML = parsedData['speed'];
                break;
            case "qoute":
                span[i].innerHTML = parsedData['qoute'];
                break;
            case "message":
                span[i].innerHTML = parsedData['message'];
        }
    }
    localStorage.removeItem( 'objectToPass' );
}
