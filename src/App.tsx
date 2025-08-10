import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="p-8 space-y-4">
      <div className="flex bg-red justify-center p-16 h-10 bg-amber-200">
        Click on the Vite and React logos to learn more (This works!)
      </div>
      
      <div className="space-y-2">
        <Button variant="destructive">Destructive Button (using variant)</Button>
      </div>
    </div>
  )
}

export default App
