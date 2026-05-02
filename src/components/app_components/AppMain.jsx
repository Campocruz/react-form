import { useState } from "react";
import AppItemCard from "../main-components/AppItemCard";

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
        articles.map((item, i) => (<AppItemCard key={i} id={i} title={item.title} onDelate={deleteItem} />))
      }
    </>
  )
}