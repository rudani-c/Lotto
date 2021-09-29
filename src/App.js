import { countBy, transform } from 'lodash';
import moment from 'moment';
import React from 'react';
import DataTable from 'react-data-table-component';
import data from './data/data.json';

const DATE_FORMAT = 'MM/DD/YY';
const EPowerBallNumbers = {
  N1: 'n1',
  N2: 'n2',
  N3: 'n3',
  N4: 'n4',
  N5: 'n5',
  PB: 'pb',
}

const EAnalysis = {
  zeroToTen: 'zeroToTen',
  elevenToTwenty: 'elevenToTwenty',
  twentyoneToThirty: 'twentyoneToThirty',
  thirtyoneToFourty: 'thirtyoneToFourty',
  fourtyoneToFifty: 'fourtyoneToFifty',
  fiftyoneToSixty: 'fiftyoneToSixty',
  sixtyoneToSeventy: 'sixtyoneToSeventy',
}

const columns = [
  {
    name: 'Draw Date',
    selector: 'drawTime',
    sortable: true,
  },
  {
    name: 'n1',
    selector: EPowerBallNumbers.N1,
  },
  {
    name: 'n2',
    selector: EPowerBallNumbers.N2,
  },
  {
    name: 'n3',
    selector: EPowerBallNumbers.N3,
  },
  {
    name: 'n4',
    selector: EPowerBallNumbers.N4,
  },
  {
    name: 'n5',
    selector: EPowerBallNumbers.N5,
  },
  {
    name: 'pb',
    selector: EPowerBallNumbers.PB,
  },
  {
    name: '0-10',
    selector: EAnalysis.zeroToTen,
    style: "background-color: #daf8ff",
  },
  {
    name: '11-20',
    selector: EAnalysis.elevenToTwenty,
    style: "background-color: #daf8ff",
  },
  {
    name: '21-30',
    selector: EAnalysis.twentyoneToThirty,
    style: "background-color: #daf8ff",
  },
  {
    name: '31-40',
    selector: EAnalysis.thirtyoneToFourty,
    style: "background-color: #daf8ff",
  },
  {
    name: '41-50',
    selector: EAnalysis.fourtyoneToFifty,
    style: "background-color: #daf8ff",
  },
  {
    name: '51-60',
    selector: EAnalysis.fiftyoneToSixty,
    style: "background-color: #daf8ff",
  },
  {
    name: '61-70',
    selector: EAnalysis.sixtyoneToSeventy,
    style: "background-color: #daf8ff",
  },
];

Number.prototype.between = function (a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this >= min && this <= max;
};

const noOfNumbersBetween = (numbersArray, min, max) => {
  return numbersArray.filter(n => Number(n).between(min, max)).length;
}

const countNoOfTimesNumberDrawn = (drawnNumbersArray) => {
  return countBy(drawnNumbersArray, (n) => n);
}

const getHotNumbers = (noOfTimesNumberDrawn) => {
  return transform(noOfTimesNumberDrawn, (result, value, key) => {
    const numbersArray = result[value];
    if (numbersArray) {
      numbersArray.push(key);
    } else {
      result[value] = [key];
    }
  }, {});
}

function App() {
  const drawnNumbers = [];
  const powerballNumbers = [];
  const powerballData = [];
  data.forEach(d => {
    const numbers = d.field_winning_numbers.split(",", 5);
    drawnNumbers.push(...numbers);
    const powerball = d.field_winning_numbers.split(",", 6).slice(5).join();
    powerballNumbers.push(powerball);
    powerballData.push({
      drawTime: moment(d.field_draw_date).format(DATE_FORMAT),
      [EPowerBallNumbers.N1]: numbers[0],
      [EPowerBallNumbers.N2]: numbers[1],
      [EPowerBallNumbers.N3]: numbers[2],
      [EPowerBallNumbers.N4]: numbers[3],
      [EPowerBallNumbers.N5]: numbers[4],
      [EPowerBallNumbers.PB]: powerball,
      [EAnalysis.zeroToTen]: noOfNumbersBetween(numbers, 0, 10),
      [EAnalysis.elevenToTwenty]: noOfNumbersBetween(numbers, 11, 20),
      [EAnalysis.twentyoneToThirty]: noOfNumbersBetween(numbers, 21, 30),
      [EAnalysis.thirtyoneToFourty]: noOfNumbersBetween(numbers, 31, 40),
      [EAnalysis.fourtyoneToFifty]: noOfNumbersBetween(numbers, 41, 50),
      [EAnalysis.fiftyoneToSixty]: noOfNumbersBetween(numbers, 51, 60),
      [EAnalysis.sixtyoneToSeventy]: noOfNumbersBetween(numbers, 61, 70),
    })
  });
  const countNoOfTimes = countNoOfTimesNumberDrawn(drawnNumbers);
  console.log("DRAWN NUMBERS");
  console.log(countNoOfTimes);
  const hotNumbers = getHotNumbers(countNoOfTimes);
  const countNoOfTimesPB = countNoOfTimesNumberDrawn(powerballNumbers);
  console.log("DRAWN PB NUMBERS");
  console.log(countNoOfTimesPB);
  const hotPBNumbers = getHotNumbers(countNoOfTimesPB);

  const listItems = (list) => (
    <ul>
      {
        Object.entries(list).map(([key, value], i) => {
          return (
            <li key={i}>
              {key + ': ' + value.join(", ")}
            </li>
          );
        })
      }
    </ul>
  );

  return (
    <div className="App">
      <div className="Analysis">
        <div>
          {"HOT NUMBERS:"}
          {listItems(hotNumbers)}
        </div>
        <div>
          {"HOT PB NUMBERS:"}
          {listItems(hotPBNumbers)}
        </div>
      </div>
      <div>
        <DataTable
          title="Lotto Analysis"
          columns={columns}
          data={powerballData}
          highlightOnHover
        />
      </div>
    </div>
  );
}

export default App;
