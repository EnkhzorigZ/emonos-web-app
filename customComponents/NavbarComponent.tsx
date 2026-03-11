import { apiRequest } from "@/api/apiServerRequest"

export default async function NavbarComponent() {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-background">
      <div className="border-b">
        <div className="space-y-4 py-4">
          <div className="container-max">Navbar</div>
        </div>
      </div>
    </div>
  )
}
