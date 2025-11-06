
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Հիմնական բովանդակություն */}
      <div className="flex flex-1">

        {/* Գլխավոր մաս */}
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-semibold mb-6">Dashboard Overview</h1>

          {/* Statistic cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">152</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">87</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">42</p>
              </CardContent>
            </Card>
          </div>

          {/* Example recent orders table */}
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Order ID</th>
                  <th className="p-2">Customer</th>
                  <th className="p-2">Total</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">#1021</td>
                  <td className="p-2">Arevik B.</td>
                  <td className="p-2">$45.00</td>
                  <td className="p-2 text-green-600 font-medium">Delivered</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">#1020</td>
                  <td className="p-2">Viktor A.</td>
                  <td className="p-2">$28.50</td>
                  <td className="p-2 text-yellow-600 font-medium">Pending</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-2">#1019</td>
                  <td className="p-2">Ani M.</td>
                  <td className="p-2">$60.00</td>
                  <td className="p-2 text-red-600 font-medium">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboardPage
