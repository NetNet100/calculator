import React, {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const calcBtn = [];
  const operationsBtn = [];
  [7, 8, 9, 4, 5, 6, 1, 2, 3, , 0, '.', '%'].forEach((item) => {
    calcBtn.push(
        <button
            onClick={(e) => {
              setData(data + e.target.value)
            }}
            key={item}
            value={item}>
          {item}
        </button>
    );
  });
  ['/', '*', '-', '+'].forEach((operator) => {
    operationsBtn.push(
        <button onClick={(e) => {
          setData(data + e.target.value);
        }}
                key={operator}
                value={operator}>
          {operator}
        </button>
    );
  });
  operationsBtn.push(
      <button
          value="="
          key="="
          onClick={(e) => {
            try {
              setData(
                  String(eval(data)).length > 3 &&
                  String(eval(data)).includes('.')?
                      String(eval(data).toFixed(4)) :
                      String(eval(data))
              );
            } catch (err) {
              console.log(err);
            }
          }}>
        =
      </button>)

  return (
      <div>
        <div className="data">
          <h4>{data}</h4>
        </div>
        <div className="wrapper">
          <div className="clear">
            <button onClick={(e) => {
              setData(d => d.slice(0, data.length - 1));
            }}
                    key={"Clear"}>
              Clear
            </button>
          </div>
          <div className="ac">
            <button
                onClick={(e) => {
                  setData(d => d = "");
                }}
                key={"AC"}>
              AC
            </button>
          </div>
          <div className="digits">
            {calcBtn}
          </div>
          <div className="operations">
            {operationsBtn}
          </div>
        </div>
      </div>
  );
}

export default App;
