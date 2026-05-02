export default function AppBtnItem({ index, icon, text, color, userFuction }) {

  return (
    <>
      <button className={'btn btn-' + color} onClick={() => userFuction(index)}>
        <div className="">
          <i className={'bi bi-' + icon}></i>
          <p className="m-0">
            {text}
          </p>
        </div>
      </button>

    </>
  )
}