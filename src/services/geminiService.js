const DEFAULT_MODEL = 'gemini-1.5-flash';

function getGeminiApiKey() {
  const key = process.env.REACT_APP_GEMINI_API_KEY;
  return typeof key === 'string' && key.trim() ? key.trim() : '';
}

function toGeminiMessages({ messages = [] }) {
  // Gemini expects an array of { role: 'user' | 'model' | ... , parts: [{ text }] }
  // We only support user/model roles for chat.
  return messages
    .filter((m) => m && typeof m === 'object')
    .map((m) => {
      const role = m.role === 'model' ? 'model' : 'user';
      const text = typeof m.text === 'string' ? m.text : '';
      return { role, parts: [{ text }] };
    });
}

/**
 * Sends chat messages to Gemini and returns the assistant response text.
 *
 * IMPORTANT: This is frontend-only. Do not use production keys.
 */
export async function sendMessageToGemini({
  messages = [],
  model = DEFAULT_MODEL,
  signal,
} = {}) {
  const apiKey = getGeminiApiKey();

  if (!apiKey) {
    throw new Error(
      'Gemini API key is missing. Set REACT_APP_GEMINI_API_KEY in your .env file.'
    );
  }

  const payload = {
    contents: toGeminiMessages({ messages }),
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
    },
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model
  )}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Gemini request failed (${res.status}). ${text}`.trim());
  }

  const data = await res.json();

  const candidate =
    data?.candidates?.[0] || data?.candidates?.[0];

  const responseText =
    candidate?.content?.parts?.map((p) => p?.text).filter(Boolean).join('') ||
    candidate?.content?.parts?.[0]?.text ||
    '';

  if (!responseText) {
    throw new Error('Gemini returned an empty response.');
  }

  return responseText;
}

