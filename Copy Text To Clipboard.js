const btn = document.getElementById('btn');

const shareData = 'Hello World!!';

btn.addEventListener('click', async () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareData).then(
      () => {
        alert('Text copied to clipboard ');
      },
      (error) => {
        alert('Error ', error.message);
      }
    );
  }
});
