const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = { count: numberOfFilms, movies: {} };

function setMoviews() {
  const countOfQuestions = 2;
  let i = 0;

  while (i < countOfQuestions) {
    const lastMovieName = prompt('Один из последних просмотренных фильмов?');
    if (!checkInput(lastMovieName)) continue;

    const lastMovieMark = prompt('На сколько оцените его?');
    if (!checkInput(lastMovieMark)) continue;

    i++;

    personalMovieDB.movies[lastMovieName] = lastMovieMark;
  }
}

function checkInput(name) {
  if (name === '' || name.length > 50) {
    alert('Пустая строка или ввод превышает 50 символов');
    return false;
  }

  return true;
}

setMoviews();

console.log(personalMovieDB);
