from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

import models, database
from pydantic import BaseModel

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Pharma SaaS Backend")

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

class DrugCreate(BaseModel):
    name: str
    scientific_name: str = None
    price: float
    stock: int = 0
    barcode: str = None

class DrugResponse(DrugCreate):
    id: int
    
    class Config:
        from_attributes = True

@app.get("/")
def read_root():
    return {"message": "Welcome to the Pharma SaaS API"}

@app.get("/api/drugs", response_model=List[DrugResponse])
def get_drugs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    drugs = db.query(models.Drug).offset(skip).limit(limit).all()
    return drugs

@app.post("/api/drugs", response_model=DrugResponse)
def create_drug(drug: DrugCreate, db: Session = Depends(get_db)):
    db_drug = models.Drug(**drug.model_dump())
    db.add(db_drug)
    db.commit()
    db.refresh(db_drug)
    return db_drug
