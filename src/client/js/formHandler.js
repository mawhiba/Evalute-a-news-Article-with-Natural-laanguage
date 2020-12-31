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
        document.getElementById('results').innerHTML = 
        `Hello ${data.sentence_list[0].text} , Agreement: ${data.agreement} , Confidence : ${data.confidence} , score_tag : ${data.sentence_list[0].score_tag} `
    })
}

export { handleSubmit }
