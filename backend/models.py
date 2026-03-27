from sqlalchemy import Column, Integer, String, Float
from database import Base

class Drug(Base):
    __tablename__ = "drugs"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    scientific_name = Column(String, index=True, nullable=True)
    price = Column(Float, nullable=False)
    stock = Column(Integer, default=0)
    barcode = Column(String, unique=True, index=True, nullable=True)
