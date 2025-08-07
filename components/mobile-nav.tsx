"use client"

interface NavItem {
  id: string
  label: string
}

interface MobileNavProps {
  isOpen: boolean
  navItems: NavItem[]
  onItemClick: (id: string) => void
  onClose: () => void
}

export function MobileNav({ isOpen, navItems, onItemClick, onClose }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 textured-bg border-b-2 border-black shadow-lg">
      <ul className="py-4 space-y-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onItemClick(item.id)}
              className="w-full text-left px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-colors duration-200"
              aria-label={`Navegar para seção ${item.label}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
