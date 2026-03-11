import DirectLocation from "./DirectLocation"

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-background">
      <div className="border-b">
        <div className="space-y-4 py-4">
          <DirectLocation />
          <div className="container-max">Navbar</div>
        </div>
      </div>
    </div>
  )
}
