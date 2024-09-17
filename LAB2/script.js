const personalMovieDB = {
  privat: false,
  movies: {
    'Кинг-конг': 8,
    'Битва за Севастополь': 7,
    'Бриллиантовая рука': 9,
  },
};

function initMovieContainer() {
  let container = document.createElement('div');
  container.id = 'movieContainer';
  document.body.appendChild(container);
  return container;
}

function initTable() {
  if (personalMovieDB.privat) return;

  let container = initMovieContainer();

  let table = document.createElement('table');

  const tableHead = table.createTHead();
  const tableHeadRow = tableHead.insertRow();
  const tableHeadCell1 = tableHeadRow.insertCell();
  const tableHeadCell2 = tableHeadRow.insertCell();

  tableHeadCell1.textContent = 'Название фильма';
  tableHeadCell2.textContent = 'Оценка к фильму';

  const tbody = table.createTBody();

  for (const movie in personalMovieDB.movies) {
    const row = tbody.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();

    cell1.textContent = movie;
    cell2.textContent = personalMovieDB.movies[movie];
  }

  container.appendChild(table);
}

initMovieContainer();
initTable();
