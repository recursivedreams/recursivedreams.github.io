<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>OpenAI Button Example</title>
  </head>
  <body>
    <h1>OpenAI Button Example</h1>
    <label for="prompt">Prompt:</label>
    <input type="text" id="prompt" name="prompt" value="What is the meaning of life?">
    <br>
    <button onclick="generateResponse()">Generate Response</button>
    <br>
    <br>
    <p id="response"></p>
    
    <script src="https://cdn.openai.com/sdk/js/0.5.0/openai.min.js"></script>
    <script>
      // Set up OpenAI API credentials
      openai.apiKey = 'your_openai_api_key_here';

      function generateResponse() {
        // Get the prompt from the input field
        const prompt = document.getElementById('prompt').value;

        // Call the OpenAI API to generate a response to the prompt
        openai.completion.create({
          engine: 'davinci',
          prompt: prompt,
          maxTokens: 1024,
          n: 1,
          stop: null,
          temperature: 0.7,
        }).then(response => {
          // Set the response text in the HTML page
          document.getElementById('response').innerHTML = response.choices[0].text;
        }).catch(error => {
          // Handle any errors
          console.log(error);
        });
      }
    </script>
  </body>
</html>