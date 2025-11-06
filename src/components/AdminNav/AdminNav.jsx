function AdminNav() {
  return (
    <nav className="h-[60px] bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        {/* Left Side — Logo or Title */}
        <h2 className="text-xl font-semibold tracking-wide">
          Admin Dashboard
        </h2>

        {/* Right Side — User Info */}
        <div className="flex items-center space-x-3 gap-1">
          <img
            src="https://ui-avatars.com/api/?name=Arevik&background=4F46E5&color=fff"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <h3 className="text-sm font-medium">arevikk999</h3>
        </div>
      </div>
    </nav>
  );
}

export default AdminNav;
