import { Bell, Settings } from 'lucide-react'

function Navbar() {
  return (
    <div className="flex justify-end gap-6 text-teal-700 text-2xl mb-8">
      <Bell />
      <Settings />
    </div>
  )
}

export default Navbar