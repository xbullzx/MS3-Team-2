/* GET homepage */
const about = (req, res) => {
   res.render('generic-text', { title: 'About FIDO' });
 };

const list = (req, res) => {
  res.render('list-form', { title: 'Pet needs list' });
};

const discounts = (req, res) => {
  res.render('coupons', {
    title: 'FIDO discounts',
    pageHeader: {
      title: 'FIDO',
      strapline: 'helps you find the biggest discounts at your favorite Pet Store!'
    }
  });
};

const comments = (req, res) => {
  res.render('review-form', { title: 'Leave us a comment' });
};
 
 module.exports = {
  about,
  list,
  discounts,
  comments
 };