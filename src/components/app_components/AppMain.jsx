import { useState } from "react";
import AppItemCard from "../main-components/AppItemCard";
import AppFormAddItem from "../main-components/AppFormAddItem";

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
  const [newArticle, setNewArticle] = useState('')

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
        <h2 className="text-center">Article List</h2>
        <hr />
        <div className="row">
          <div className="col-8">
            <div>
              <h3>Your List</h3>
              {
                articles.map((item, i) => (<AppItemCard key={i} id={i} title={item.title} onDelate={deleteItem} />))
              }
            </div>
          </div>
          <div className="col-4 mt-5 ">
            <AppFormAddItem inputValue={newArticle} formSubmit={handleSubmit} renderValue={setNewArticle} />
          </div>
        </div>
      </div>

    </>
  )
}