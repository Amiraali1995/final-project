import { checkForURL } from './urlChecker';
async function handle_Submit(event) {
    event.preventDefault();
    const form_Txt = document.getElementById('url').value;
    if (checkForURL(form_Txt)) {
        console.log(": Form is  Submitted Successfully:");
        try {
            const response = await postData('http://localhost:8080/api', { url: form_Txt });
            update_UI(response);
        } catch (error) {
            console.log('Error:', error);
        }
    }
     else
      {
        alert('please try with a valid URL.');
    }}
async function postData(url = "", data = {}) 
{
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData);
        return newData;
    } 
    catch (error) {
        console.log('Error:', error);
    }}
function update_UI(response) {
    document.getElementById('polarity').innerHTML = `Polarity: ${polarityChecker(response.score_tag)}`;
    document.getElementById('agreement').innerHTML = `Agreement: ${response.agreement}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${response.subjectivity}`;
    document.getElementById('confidence').innerHTML = `Confidence: ${response.confidence}`;
    document.getElementById('irony').innerHTML = `Irony: ${response.irony}`;
}
function polarityChecker(score) 
{
    switch (score) {
        case 'P+':
            return 'Strong Positive';
        case 'P':
            return 'Positive';
        case 'NEW':
            return 'Neutral';
        case 'N':
            return 'Negative';
        case 'N+':
            return 'Strong Negative';
        case 'NONE':
            return 'No Sentiment';
        default:
            return 'Unknown';
    }}
export { handle_Submit };
export { polarityChecker };