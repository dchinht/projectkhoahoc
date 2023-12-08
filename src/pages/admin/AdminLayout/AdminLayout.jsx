/* eslint-disable react/prop-types */
import HeaderAdmin from "../Dashbroad/Admin/HeaderAdmin"
import ListAdmin from "../Dashbroad/Admin/ListAdmin"

function AdminLayout({children}) {
  return (
    <div>
        <HeaderAdmin/>
        <ListAdmin/>
        <div className="ml-[320px]">
            {children}
        </div>
    </div>
  )
}

export default AdminLayout