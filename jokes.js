<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>OpenAI Button Example</title>
    <style>
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      
      #container {
        margin: 50px auto;
        max-width: 800px;
        text-align: center;
      }
      
      h1 {
        margin-bottom: 20px;
      }
      
      label {
        display: block;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: left;
      }
      
      input[type="text"] {
        font-size: 16px;
        padding: 10px;
        width: 100%;
      }
      
      button {
        background-color: #4CAF50;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 16px;
        margin-top: 20px;
        padding: 10px 20px;
        transition: background-color 0.3s;
      }
      
      button:hover {
        background-color: #3e8e41;
      }
      
      #response {
        background-color: #f2f2f2;
        border: 1px solid #ddd;
        margin-top: 20px;
        padding: 20px;
        text-align: left;
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <h1>OpenAI Button Example</h1>
      <label for="prompt">Prompt:</label>
      <input type="text" id="prompt" name="prompt" value="What is the meaning of life?">
      <button onclick="generateResponse()">Generate Response</button>
      <div id="response"></div>
    </div>
    
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
          const responseDiv = document.getElementById('response');
          responseDiv.innerHTML = '<strong>Response:</strong><br>' + response.choices[0].text;
          responseDiv.style.display = 'block';
        }).catch(error => {
          // Handle any errors
          console.log(error);
        });
      }
    </script>
  </body>
</html>
