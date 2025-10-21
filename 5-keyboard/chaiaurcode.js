console.log('Project 5');
const insert = document.getElementById('insert');
window.addEventListener('keydown', function (e) {
  console.log(e);
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}s</td>
    <td>${e.code}</td>a
  </tr>
</table> 
  </div>`;
});
