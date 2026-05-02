export default function AppItemCard({ id, title, onDelate }) {

  return (
    <>
      <div key={id} className="card">
        <div className="card-heater">
          <h3>{title}</h3>
        </div>
        <button className="btn btn-dark" onClick={() => onDelate(id)}><i className="bi bi-trash"></i></button>
      </div>
    </>
  )
}