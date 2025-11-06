import { NavLink, useNavigate } from "react-router-dom"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Home, ShoppingBag, Settings, LogOut, SquareMenu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux"
import { setIsAuth } from "@/store/slices/loginSlice/loginSlice"

export function AdminSideBar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(setIsAuth("false"))
    localStorage.removeItem("isAuth")
    navigate("/admin/login")
    
  }
  return (
    <div className="h-screen w-[240px] border-r bg-gray-50 flex flex-col justify-between customclass">
      {/* Header */}
      <div>
        <div className="p-5">
          <h2 className="text-lg font-bold">Admin Panel</h2>
        </div>
        <Separator />
        <ScrollArea className="h-[calc(100vh-140px)]">
          <nav className="flex flex-col p-4 space-y-2">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md text-sm transition ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
              }
            >
              <Home size={18} /> Dashboard
            </NavLink>

            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md text-sm transition ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
              }
            >
              <ShoppingBag size={18} /> Products
            </NavLink>

            <NavLink
              to="/admin/menu"
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-md text-sm transition ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                }`
              }
            >
              <SquareMenu /> Menu
            </NavLink>
              <a href="nkjkbmhjnb"></a>
          </nav>
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
          <Button variant="ghost" className="w-full flex gap-2 justify-start cursor-pointer" onClick={handleLogOut}>
            <LogOut size={18} /> Logout
          </Button>
      </div>
    </div>
  )
}
