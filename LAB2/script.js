document.addEventListener('DOMContentLoaded', () => {
  const personalMovieDB = {
    privat: false,
    movies: {
      'Кинг-конг': 8,
      'Битва за Севастополь': 7,
      'Бриллиантовая рука': 9,
    },
  };

  function createMovieTableContainer() {
    const container = document.createElement('div');
    container.id = 'movieTableContainer';
    document.body.appendChild(container);
    return container;
  }

  function displayMovies(container) {
    if (personalMovieDB.privat) {
      return;
    }

    const table = document.createElement('table');

    const header = table.createTHead();
    const headerRow = header.insertRow();
    const cell1 = headerRow.insertCell();
    const cell2 = headerRow.insertCell();
    cell1.textContent = 'Название фильма';
    cell2.textContent = 'Оценка';

    const tbody = table.createTBody();
    for (const [title, rating] of Object.entries(personalMovieDB.movies)) {
      const row = tbody.insertRow();
      const cellTitle = row.insertCell();
      const cellRating = row.insertCell();
      cellTitle.textContent = title;
      cellRating.textContent = rating;
    }

    container.appendChild(table);
  }

  const movieTableContainer = createMovieTableContainer();
  displayMovies(movieTableContainer);
});
