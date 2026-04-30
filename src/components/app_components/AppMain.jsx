import { useState } from "react";
export default function AppMain() {

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

  const [article, setArticle] = useState(articleList)
  const [newArticle, setNewArticle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setArticle([newArticle, ...article])
    setNewArticle('')
  }

  return (
    <>
      <div className="container">
        <h2>Article List</h2>
        {
          articleList.map((article) => (
            <div key={article.id} className="card">
              <div className="card-heater">
                <h3>{article.title}</h3>
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