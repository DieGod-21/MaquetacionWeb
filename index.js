   
const categoriasContenedor = document.getElementById("categorias");
  
document.addEventListener('DOMContentLoaded', function() {
 const categoriaUrl = "https://backcvbgtmdesa.azurewebsites.net/api/categorias";
  const contenedorCategorias = document.getElementById("categorias");
  // Verificar si el contenedor existe
  if (!contenedorCategorias) {
    console.error('No se encontró el elemento con ID "categorias"');
    return;
  }

  fetch(categoriaUrl)
    .then(response => {
      if (!response.ok) throw new Error('HTTP error! status: ${response.status}');
      return response.json();
    })
    .then(categorias => {
      console.log('Categorías recibidas:', categorias);
      
      // Limpiar contenedor
      contenedorCategorias.innerHTML = '';
      
      // Crear título de sección
      const titulo = document.createElement('h4');
      titclassName = "mb-3";
      titulo.textContent = "Categorías";
      contenedorCategorias.appendChild(titulo);
      
      // Crear lista de categorías
      const lista = document.createElement('div');
      lista.className = "list-group";
      
      categorias.forEach(categoria => {
        const item = document.createElement('a');
        item.href = "#";
        item.className = "list-group-item list-group-item-action";
        item.innerHTML = `
          <div class="d-flex justify-content-between">
            <span>${categoria.descripcion}</span>
            <span class="badge bg-primary rounded-pill">${categoria.id_categoria}</span>
          </div>
        `;
        lista.appendChild(item);
      });
      
      contenedorCategorias.appendChild(lista);
    })
    .catch(error => {
      console.error("Error al cargar categorías:", error);
      contenedorCategorias.innerHTML = `
        <div class="alert alert-danger">
          Error al cargar categorías: ${error.message}
        </div>
      `;
    });
});
