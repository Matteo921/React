var element = React.createElement('div', {}, 'Hello world!');



var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'harrypotter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'Krollew.jpg'
  },
    {
    id: 3,
    title: 'Social Network',
    desc: 'Film o wlaścicielu facebooka',
    img: 'social.jpg'
  },
    {
    id: 4,
    title: 'Snowden',
    desc: 'Film o historii byłego pracownika służb państwowych który ujawnia prasie ściśle tajne dokumenty doprowadzając jednocześnie do największego wycieku zastrzeżonych informacji w historii USA. ',
    img: 'snowden.jpg'
  },
    {
    id: 5,
    title: 'Black mirror',
    desc: 'Serial Sc-Fi',
    img: 'blackmirror.jpg'
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));