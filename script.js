async function generateScript(){

let topic = document.getElementById("topic").value;

let prompt = `
Write an Instagram reel script.

Topic: ${topic}

Format:
Hook
Body
CTA
Caption
Hashtags

Tone: Hinglish
`;

let response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({
model:"gpt-4o-mini",
messages:[{role:"user",content:prompt}]
})

});

let data = await response.json();

document.getElementById("result").innerText =
data.choices[0].message.content;

}
