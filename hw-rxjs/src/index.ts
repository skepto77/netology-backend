import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const query = 'rxjs';

const o1 = ajax.getJSON(`https://api.github.com/search/repositories?q=${query}`).pipe(
  map((response) => {
    response['items'].map((item) => console.log(`${item.name}: ${item.url}`));
    return response['total_count'];
  }),

  catchError((error) => of(error))
);

const o2 = ajax.getJSON(`https://gitlab.com/api/v4/projects?search=${query}`).pipe(
  map((response) => {
    for (const [key, value] of Object.entries(response)) {
      console.log(`${value.name}: ${value.web_url}`);
    }
    return Object.entries(response).length;
  }),
  catchError((error) => of(error))
);

o1.subscribe({
  next: (value: any) => console.log('GitHub:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error),
});

o2.subscribe({
  next: (value: any) => console.log('Gitlab:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error),
});
