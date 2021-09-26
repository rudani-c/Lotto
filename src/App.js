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

function App() {
  return (
    <div className="App">
      <DataTable
        title="Lotto Analysis"
        columns={columns}
        data={[]}
        pagination
        highlightOnHover
      />
    </div>
  );
}

export default App;
