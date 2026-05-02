import { useState } from "react";

const articleList = [
  {
    id: 1,
    title: "bici"
  },
  {
    id: 2,
    title: "bicicletta"
  },
];

export default function AppMain() {

  const [articles, setArticles] = useState(articleList)
  const [newArticle, setNewArticle] = useState('Pino')

  function handleSubmit(e) {
    e.preventDefault()
    const newObj = { id: Date.now(), title: newArticle }
    setArticles([newObj, ...articles])
    setNewArticle('')
  }

  function deleteItem(i) {
    const filterdIndex = articles.filter((article, index) => index !== i)
    console.log(filterdIndex);
    setArticles(filterdIndex);
  }

  return (
    <>
      <div className="container">
        <h2>Article List</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={newArticle} onChange={e => setNewArticle(e.target.value)} />
          <button>Add New Article</button>
        </form>
      </div>
      {
        articles.map((item, i) => (
          <div key={i} className="card">
            <div className="card-heater">
              <h3>{item.title}</h3>
            </div>
            <button className="btn btn-dark" onClick={() => deleteItem(i)}><i className="bi bi-trash"></i></button>
          </div>))
      }
    </>
  )
}