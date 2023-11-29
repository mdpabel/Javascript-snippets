const btn = document.getElementById('btn');

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
};

btn.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      alert('SUCCESS');
    } catch (err) {
      console.log(err);
    }
  }
});
