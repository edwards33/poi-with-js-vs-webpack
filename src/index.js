import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const numbers = interval(500);
const takeFourNumbers = numbers.pipe(take(40));

takeFourNumbers.subscribe(
  i => (
    document.getElementById("app").innerHTML = `
      <h1>Hello POI!</h1>
      <p>with count of ${i} (max = 39)</p>
    `
  )
)
