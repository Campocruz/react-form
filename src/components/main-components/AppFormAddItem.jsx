export default function AppFormAddItem({inputValue, formSubmit, renderValue}) {

  return (
    <>
      <form onSubmit={formSubmit}>
        <input type="text" value={inputValue} onChange={e => renderValue(e.target.value)} />
        <button>Add New Article</button>
      </form>
    </>
  )
}