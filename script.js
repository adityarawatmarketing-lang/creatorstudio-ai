function generateScript(){

let topic = document.getElementById("topic").value;

let result = `
🎬 Content Ideas + Reel Scripts for: ${topic}

----------------------------------

IDEA 1: Biggest Myth About ${topic}

Hook:
"90% people still believe this myth about ${topic}!"

Script:
Most people think this is true, but it's completely wrong.
Let me explain in simple words.

If you actually want results in ${topic},
focus on the fundamentals instead of random advice.

CTA:
Follow for more real knowledge.

----------------------------------

IDEA 2: 3 Mistakes People Make in ${topic}

Hook:
"If you're struggling with ${topic}, you're probably making these 3 mistakes."

Script:
Mistake 1: Following random internet advice.
Mistake 2: Not being consistent.
Mistake 3: Ignoring the basics.

Fix these and you'll see real improvement.

CTA:
Save this reel for later.

----------------------------------

IDEA 3: Simple Trick for ${topic}

Hook:
"This simple trick can improve your ${topic} instantly."

Script:
Most people overcomplicate things.

Instead, focus on small consistent actions.

That's how real results are built.

CTA:
Follow for more simple tips.

`;

document.getElementById("result").innerText = result;

}
