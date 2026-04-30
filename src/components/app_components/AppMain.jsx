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



  return (
    <>
      <div className="container">
        <h2>Card List</h2>
        {
          articleList.map((article) => (
            <div key={article.id} className="card">
              <div className="card-heater">
                <h3>{article.title}</h3>
              </div>
            </div>))
        }
      </div>
    </>
  )
}