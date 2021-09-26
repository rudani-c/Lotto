import moment from 'moment';
import React from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';

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
  },
  {
    name: '11-20',
    selector: EAnalysis.elevenToTwenty,
  },
  {
    name: '21-30',
    selector: EAnalysis.twentyoneToThirty,
  },
  {
    name: '31-40',
    selector: EAnalysis.thirtyoneToFourty,
  },
  {
    name: '41-50',
    selector: EAnalysis.fourtyoneToFifty,
  },
  {
    name: '51-60',
    selector: EAnalysis.fiftyoneToSixty,
  },
  {
    name: '61-70',
    selector: EAnalysis.sixtyoneToSeventy,
  },
];

Number.prototype.between = function(a, b) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return this >= min && this <= max;
};

function noOfNumbersBetween(numbersArray, min, max) {
  return numbersArray.filter(n => Number(n).between(min, max)).length;
}

function App() {

  const powerballData = data.map(d => {
    const drawingResult = d.results[0].primary;
    const numbers = drawingResult.slice(0, 5);
    return {
      drawTime: moment(d.drawTime).format('MM/DD/YY'),
      [EPowerBallNumbers.N1]: drawingResult[0],
      [EPowerBallNumbers.N2]: drawingResult[1],
      [EPowerBallNumbers.N3]: drawingResult[2],
      [EPowerBallNumbers.N4]: drawingResult[3],
      [EPowerBallNumbers.N5]: drawingResult[4],
      [EPowerBallNumbers.PB]: drawingResult[6],
      [EAnalysis.zeroToTen]: noOfNumbersBetween(numbers, 0, 10),
      [EAnalysis.elevenToTwenty]: noOfNumbersBetween(numbers, 11, 20),
      [EAnalysis.twentyoneToThirty]: noOfNumbersBetween(numbers, 21, 30),
      [EAnalysis.thirtyoneToFourty]: noOfNumbersBetween(numbers, 31, 40),
      [EAnalysis.fourtyoneToFifty]: noOfNumbersBetween(numbers, 41, 50),
      [EAnalysis.fiftyoneToSixty]: noOfNumbersBetween(numbers, 51, 60),
      [EAnalysis.sixtyoneToSeventy]: noOfNumbersBetween(numbers, 61, 70),
    }
  });

  return (
    <div className="App">
      <DataTable
        title="Lotto Analysis"
        columns={columns}
        data={powerballData}
        pagination
        highlightOnHover
      />
    </div>
  );
}

export default App;
