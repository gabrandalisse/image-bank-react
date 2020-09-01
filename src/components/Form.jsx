import React, { useState } from 'react';
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ updateSearch }) => {

    const [ word, updateWord ] = useState("");
    const [ error, updateError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if(word.trim() === ""){
            updateError(true);
            return;
        }
        updateError(false);
        updateSearch(word);
    };


    return (
      <form
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="form-group col-md-8">
            <input 
                type="text"
                className="form-control form-control-lg"
                placeholder="Busca una imágen, ejemplo: café"
                onChange={ e => updateWord(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input 
                type="submit"
                className="btn btn-lg btn-danger btn-block"
                value="Buscar"
            />
          </div>
        </div>

        { error ? <Error message="Agrega un término de búsqueda" /> : null }
      </form>
    );
};

Form.propTypes = {
  updateSearch: PropTypes.func.isRequired,
};
 
export default Form;