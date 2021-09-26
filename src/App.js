import React from 'react';
import DataTable from 'react-data-table-component';
import data from './data.json';
drawTime;
const columns = [
  {
    name: 'Draw Date',
    selector: 'drawTime',
    sortable: true,
  },
  {
    name: 'n1',
    selector: 'n1',
  },
  {
    name: 'n2',
    selector: 'n2',
  },
  {
    name: 'n3',
    selector: 'n3',
  },
  {
    name: 'n4',
    selector: 'n4',
  },
  {
    name: 'n5',
    selector: 'n5',
  },
  {
    name: 'pb',
    selector: 'pb',
  },
  {
    name: '0-10',
    selector: 'zeroToTen',
  },
  {
    name: '11-20',
    selector: 'elevenToTwenty',
  },
  {
    name: '21-30',
    selector: 'twentyoneToThirty',
  },
  {
    name: '31-40',
    selector: 'thirtyoneToFourty',
  },
  {
    name: '41-50',
    selector: 'fourtyoneToFifty',
  },
  {
    name: '51-60',
    selector: 'fiftyoneToSixty',
  },
  {
    name: '61-70',
    selector: 'sixtyoneToSeventy',
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
