function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("lista");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].parentNode.parentNode.style.display = "";
    } else {
      li[i].parentNode.parentNode.style.display = "none";
    }
  }
}
  document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById('lista');
    function carregarCursos() {
      fetch('db.json')
        .then(response => response.json())
        .then(data => {
          data.cursos.forEach(curso => {
            const a = document.createElement('a');
            a.setAttribute('href', curso.link);
  
            const divAju = document.createElement('div');
            divAju.classList.add('aju');
  
            const divCurso = document.createElement('div');
            divCurso.classList.add('curso');
  
            const img = document.createElement('img');
            img.setAttribute('src', curso.imagem);
            img.setAttribute('alt', '');
  
            const li = document.createElement('li');
            li.textContent = curso.nome;
            divCurso.appendChild(img);
            divCurso.appendChild(li);
  
            divAju.appendChild(divCurso);
  
            a.appendChild(divAju);
  
            lista.appendChild(a);
          });
        })
        .catch(error => console.error('Erro ao carregar os dados dos cursos:', error));
    }
  
    carregarCursos();
  });
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.todoscards');
    sections.forEach(function(section) {
      if (isInViewport(section)) {
        // Adicione aqui o código para carregar dinamicamente o conteúdo da seção se necessário
        console.log('Seção visível:', section.id);
      }
    });
  });
  
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }