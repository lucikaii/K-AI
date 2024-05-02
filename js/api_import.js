const sendbutton = document.getElementById('send-button')

const geminiConsult = async(question) => {

    const googleKey = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + googleKey

    const requestData = {
        contents: [
            {
                parts:[
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }

    await fetch(url, requestOptions)
    .then (response => response.json())
    .then(data => {
        const respostaTextIA = data.candidates[0].content.parts[0].text
        respostaIA(respostaIA)
    })
}

const respostaIA = (respostaTextIA) => {
    const textAreaPt = document.getElementById('answer-pt')
    textAreaPt.value = respostaTextIA
}

sendbutton.addEventListener('click', () => {
    const question = document.getElementById('question').value
    geminiConsult(question)
})