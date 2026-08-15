import "./App.css"
import Guelzower from "./pages/Guelzower/Guelzower"

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="app-header__eyebrow">
          Enilive Visitenkarten
        </p>

        <h1>Marco Köpke – Gülzower</h1>

        <p>
          Vorder- und Rückseite im Originalverhältnis 85 × 55 mm.
          Die Rückseite wird als Gutschein gestaltet.
        </p>
      </header>

      <Guelzower />
    </main>
  )
}

export default App