const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <p>Currently Unrated</p>
            <p>Comments</p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}/delete?_method=DELETE`}>
                <button type="submit" className=" btn btn-danger">Delete</button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show