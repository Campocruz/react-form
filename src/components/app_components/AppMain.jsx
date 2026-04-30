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
    console.log(articles);

  }

  return (
    <>
      <div className="container">
        <h2>Article List</h2>
        {
          articles.map((item, i) => (
            <div key={i} className="card">
              <div className="card-heater">
                <h3>{item.title}</h3>
              </div>
            </div>))
        }
        <form onSubmit={handleSubmit}>
          <input type="text" value={newArticle} onChange={e => setNewArticle(e.target.value)} />
          <button>Add New Article</button>
        </form>
      </div>
    </>
  )
}