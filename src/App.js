import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import ImagesList from "./components/ImagesList";

function App() {

  const [ search, updateSearch ] = useState("");
  const [ images, updateImages ] = useState([]);
  const [ actualpage, updateActualPage ] = useState(1);
  const [ totalpages, updateTotalPages ] = useState(1);

  useEffect(() => {
    const consultAPI = async () => {
      // Do not search when the page loads
      if (search === "") return;

      const imagePerPage = 30;
      const key = "API KEY HERE"; 
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagePerPage}&page=${actualpage}`;

      const response = await fetch(url);
      const result = await response.json();

      updateImages(result.hits); 

      // Calculate the total of pages
      const totalP = Math.ceil(result.totalHits / imagePerPage);
      updateTotalPages(totalP);

      // Moving the screen to the top
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" })

    };

    consultAPI();
  }, [search, actualpage]);

  // Define the previous page
  const previousPage = () => {
    const newActualPage = actualpage - 1;

    if(newActualPage === 0) return;
    updateActualPage(newActualPage);
  };

  // Define the next page
  const nextPage = () => {
    const newActualPage = actualpage + 1;

    if(newActualPage > totalpages) return;
    updateActualPage(newActualPage);
  };

  return (
    <div className="container">
      <div className="jumbotron mt-3">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form updateSearch={updateSearch} />
      </div>

      <div className="row justify-content-center">
        <ImagesList 
          images={images} 
        />

        {(actualpage === 1) ? null : (
          <button
            type="button"
            className="btn btn-info mr-1 mb-3"
            onClick={previousPage}
          >
            Anterior <i class="fas fa-arrow-left"></i></button>
        )}

        {(actualpage === totalpages) ? null : (
          <button 
            type="button" 
            className="btn btn-info mb-3" 
            onClick={nextPage}
          >
            Siguiente <i class="fas fa-arrow-right"></i></button>
        )}
      </div>
    </div>
  );
}

export default App;
