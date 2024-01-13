import { NavigationMenu } from "../components/ui/navigation-menu";


function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold">Hello, world!</h1>
        <p className="mt-2">This is a React app.</p>
      </div>
      <NavigationMenu/>
n   </div>
  );
}

export default App;