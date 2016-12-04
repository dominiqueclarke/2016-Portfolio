const lalela = document.querySelector('.carousel.lalela-carousel');
const hikescore = document.querySelector('.carousel.hikescore-carousel');
const sublime = document.querySelector('.carousel.sublime-carousel');
const dailyLiturgy = document.querySelector('.carousel.daily-liturgy-carousel');
const oldPortfolio = document.querySelector('.carousel.old-portfolio-carousel');

const options = {
  cellAlign: 'left',
  contain: true,
  autoPlay: 7000,
  setGallerySize: false,
  wrapAround: true,
  pageDots: false
};

const lalelaFlkty = new Flickity( lalela, options);
const hackikeScoreFlkty = new Flickity( hikescore, options);
const sublimeFlkty = new Flickity( sublime, options);
const dailyLiturgyFlkty = new Flickity( dailyLiturgy, options);
const oldPortfolioFlkty = new Flickity( oldPortfolio, options);
