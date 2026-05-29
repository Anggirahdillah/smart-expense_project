from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class AllocationInput(BaseModel):
    income: float

@app.get("/")
def home():
    return {"status": "running"}

@app.post("/predict")
def predict(data: AllocationInput):

    return {
        "needs_rate": 0.5,
        "wants_rate": 0.3,
        "saving_rate": 0.2
    }