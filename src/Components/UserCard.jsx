export default function UserCard({ data }) {
  return (
    <div className="h-120 bg-white w-full rounded-3xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Users</h2>
      <div className="space-y-3">
        {data && data.slice(0, 5).map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              user.status === 'active' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
