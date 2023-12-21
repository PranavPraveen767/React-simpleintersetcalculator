import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);

  const getvalidate = (e) => {
    const { name, value } = e.target;
    //console.log(name,value);
    // console.log(!!value.match(/^[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      //!! is uded to convert into boolean expression
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name == "rate") {
        setRate(value);
        setIsRate(true);
      } else if (name == "year") {
        setYear(value);
        setIsYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(false);
      } 
      else {
        setYear(value)
        setIsYear(false)

      }
    }
  };
  const handleCalculate=(e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please enter all the details");
    }
    else{
      //alert('submitted');
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset=(e)=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  //The getvalidate function is validating the input entered in the principle amount field. Here is an explanation in simple terms:It is called whenever the value in the principle amount field changes (onChange event)
  //It receives the event object (e) which contains the name and value of the field that changed
  //It checks if the value entered contains only numbers using a regular expression match
  //If only numbers are entered:
  //It updates the principle state with the entered value
  //It sets isPrinciple to true
  //If non-numbers are entered:
  //It still updates the principle state (to show the invalid input)
  //It sets isPrinciple to false

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 bg-dark" style={{ height: "100vh" }}>
        <div className="bg-light p-5 rounded" style={{ width: "500px" }}>
          <h1 className="text-center" style={{ fontWeight: "revert" }}>
            Simple Interest App
          </h1>
          <p className="text-center" style={{ fontWeight: "bold" }}>
            Calcuate Your Simple Interest Easily
          </p>
          <div className="bg-warning d-flex justify-content-center align-items-center w-199 p-3 rounded flex-column">
            <h1>₹ {interest}</h1>
            <p> Total Simple Interest</p>
          </div>
          <form className="mt-5"onSubmit={handleCalculate}>
            <div className="mb-3">
              <TextField name="principle" value={principle || ""} onChange={(e) => getvalidate(e)} className="w-100" id="outlined-basic" label="₹  Principle Amount" variant="outlined" />
            </div>
            {!isPrinciple && (
              <div>
                <p className="text-danger fw-bolder">Invalid Input</p>
              </div>
            )}

            <div className="mb-3">
              <TextField name="rate" onChange={(e) => getvalidate(e)} value={rate || ""} className="w-100" id="outlined-basic" label="Rate Of Interest (p.a) %" variant="outlined" />
            </div>
            {!isRate && (
              <div>
                <p className="text-danger fw-bolder">Invalid Input</p>
              </div>
            )}

            <div className="mb-3">
              <TextField name="year" value={year || ""}  onChange={(e) => getvalidate(e)}  className="w-100" id="outlined-basic" label="Year (Yr)" variant="outlined" />
            </div>
            {!isYear && (
              <div>
                <p className="text-danger fw-bolder">Invalid Input</p>
              </div>
            )}
            <Stack direction="row" spacing={2}>
              <Button type="submit" disabled={isPrinciple && isRate && isYear ?false :true} className="bg-success" style={{ width: "200px", height: "50px" }} variant="contained">
                Calculate
              </Button>
              <Button onClick={handleReset} variant="outlined" className="bg-danger" style={{ width: "200px", height: "50px", color: "white" }}>
                Reset
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
