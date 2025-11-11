import AdminNav from "@/components/AdminNav/AdminNav"
import { AdminSideBar } from "@/components/AdminSideBar/AdminSideBar"
import { Outlet } from "react-router-dom"

function AdminWrapper() {
  return (
    <div className="min-h-screen flex flex-col">
        {/* Վերևի նավիգացիա */}
        <AdminNav />

        {/* Հիմնական բովանդակություն (Sidebar + Outlet) */}
        <div className="flex flex-1">
          <AdminSideBar />

          {/* Աջ կողմում էջի բովանդակությունը */}
          <main className="flex-1 bg-gray-50 p-6">
            <Outlet />
          </main>
        </div>
      </div>
  )
}

export default AdminWrapper
