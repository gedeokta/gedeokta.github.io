// TKJ
document.querySelector('.cta-button').addEventListener('click', () => {
  alert('Lagi gabut ya? Yuk belajar coding!');
});

// Link Visual Studio Code
document.querySelector('.services-link').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://code.visualstudio.com/', '_blank');
});

// Placeholder Chat Widget
document.querySelector('.chat-widget').innerHTML = `
  <p>Halo! Ada yang bisa saya bantu?</p>
  <input type="text" placeholder="Ketik pesan..." />
  <button>Kirim</button>
`;
