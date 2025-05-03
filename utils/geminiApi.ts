export async function fetchGeminiResponse(prompt: any) {
  const key = geminiconfig.api_key;

  const body = {
    contents: [
      {
        parts: [
          { text: prompt } 
        ]
      }
    ]
  };

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    console.error("Eroare Gemini:", error);
    return "A apărut o eroare.";
  }
}
