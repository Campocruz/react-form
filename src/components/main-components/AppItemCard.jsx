import AppBtnItem from "./AppBtnItem";

export default function AppItemCard({ id, title, onDelate }) {

  return (
    <>
      <div className="card">
        <div className="card-heater d-flex justify-content-between">
          <h3 className="p-2">{title}</h3>
          <AppBtnItem index={id} icon="trash" text="delate" color="danger" userFuction={onDelate} />
        </div>
      </div>
    </>
  )
}