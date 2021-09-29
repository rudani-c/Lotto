import data from '../data/ga-pb-data.json';
export const powerballData = data.map(d => {
    const drawingResult = d.results[0].primary;
    const numbers = drawingResult.slice(0, 5);
    drawnNumbers.push(...numbers);
    const powerball = dra/wingResult[6].slice(3);
    powerballNumbers.push(powerball);
    return {
      drawTime: moment(d.drawTime).format('MM/DD/YY'),
      [EPowerBallNumbers.N1]: drawingResult[0],
      [EPowerBallNumbers.N2]: drawingResult[1],
      [EPowerBallNumbers.N3]: drawingResult[2],
      [EPowerBallNumbers.N4]: drawingResult[3],
      [EPowerBallNumbers.N5]: drawingResult[4],
      [EPowerBallNumbers.PB]: powerball,
      [EAnalysis.zeroToTen]: noOfNumbersBetween(numbers, 0, 10),
      [EAnalysis.elevenToTwenty]: noOfNumbersBetween(numbers, 11, 20),
      [EAnalysis.twentyoneToThirty]: noOfNumbersBetween(numbers, 21, 30),
      [EAnalysis.thirtyoneToFourty]: noOfNumbersBetween(numbers, 31, 40),
      [EAnalysis.fourtyoneToFifty]: noOfNumbersBetween(numbers, 41, 50),
      [EAnalysis.fiftyoneToSixty]: noOfNumbersBetween(numbers, 51, 60),
      [EAnalysis.sixtyoneToSeventy]: noOfNumbersBetween(numbers, 61, 70),
    }
  });