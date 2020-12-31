function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test?text=' + formText)
    .then(res => res.json())
    .then(function(data) {
        console.log(data)
        document.getElementById('results').innerHTML = 'Hello ' + data.sentence_list[0].text
    })
}

export { handleSubmit }