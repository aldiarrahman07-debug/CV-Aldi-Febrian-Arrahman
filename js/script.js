var skills = [
  {title:'Frontend Development', icon:'bi-code-slash', tone:'t-blue', items:[['HTML5 & CSS3',90],['Bootstrap 5',85],['JavaScript',70],['Responsive Design',70]]},
  {title:'Backend & Database', icon:'bi-database', tone:'t-teal', items:[['PHP',40],['MySQL',85],['SQL',80],['SQLite',80],['Node.js',35],['REST API Dasar',15],['Postman',10],['Python',60]]},
  {title:'Tools & Design', icon:'bi-tools', tone:'t-copper', items:[['Git & GitHub',70],['VS Code',85],['Canva',88],['PyCharm',85],['Apache NetBeans',75],['SQLiteStudio',30],['AI Studio',60],['Figma',10]]}
];

document.getElementById('skills').innerHTML = skills.map(function (s) {
  return '<div class="col-md-6 col-lg-4"><div class="skill-card ' + s.tone + '">' +
    '<div class="skill-head"><span class="ic"><i class="bi ' + s.icon + '"></i></span><h3>' + s.title + '</h3></div>' +
    s.items.map(function (i) {
      return '<div class="sk"><div class="row-t"><span>' + i[0] + '</span><b>' + i[1] + '%</b></div>' +
        '<div class="track"><i style="width:' + i[1] + '%"></i></div></div>';
    }).join('') +
    '</div></div>';
}).join('');

document.getElementById('thn').textContent = new Date().getFullYear();

var formKontak = document.getElementById('formKontak');
var statusEl = document.getElementById('statusForm');

formKontak.addEventListener('submit', function (e) {
  e.preventDefault();
  statusEl.textContent = 'Mengirim...';
  fetch(formKontak.action, {
    method: 'POST',
    body: new FormData(formKontak),
    headers: { 'Accept': 'application/json' }
  }).then(function (r) {
    if (r.ok) {
      statusEl.textContent = 'Terima kasih, pesan Anda sudah terkirim.';
      formKontak.reset();
    } else {
      statusEl.textContent = 'Pesan gagal dikirim. Silakan coba lagi atau hubungi lewat email.';
    }
  }).catch(function () {
    statusEl.textContent = 'Pesan gagal dikirim. Periksa koneksi internet Anda.';
  });
});