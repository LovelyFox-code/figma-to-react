import React from 'react';

function Search() {
    return (
        <div className="search">

            <label htmlFor="finTech" className="form-label">Пошук</label>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="grey" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            </div>
            <input className="form-control" list="datalistOptions" id="dataList"
                placeholder="Введіть: назву компанії або код ЄДРПОУ, ПІБ директора або засновника"></input>
        </div>
    )
}

export default Search;