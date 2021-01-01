function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  var isInputValid = Client.checkForName(formText);

  if (!isInputValid) {
    alert("You need to enter a sentence with 3 words or more");
  } else {
    try {
      console.log("::: Form Submitted :::");
      fetch("http://localhost:8081/test?text=" + formText)
        .then((res) => res.json())
        .then(function (data) {
          console.log(data);
          document.getElementById(
            "results"
          ).innerHTML = `${data.sentence_list[0].text} , Agreement: ${data.agreement} , Confidence : ${data.confidence} , score_tag : ${data.sentence_list[0].score_tag} `;
        });
    } catch (err) {
      alert("Sorry. There was an error in submitting your input\n" + err);
    }
  }
}

export { handleSubmit };
