from fastapi import FastAPI
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()
client = OpenAI(api_key=os.getenv("GROK_API_KEY"), base_url="https://api.x.ai/v1")

@app.post("/chat")
async def chat(user_message: str):
    response = client.chat.completions.create(
        model="grok-beta",
        messages=[
            {"role": "system", "content": "You are Berkay Öner. Use the provided context to answer as him."},
            {"role": "user", "content": user_message}
        ]
    )
    return {"reply": response.choices[0].message.content}