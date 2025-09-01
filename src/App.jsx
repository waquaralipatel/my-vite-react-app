import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Card title="Lake Serenity" content="Calm waters surrounded by lush green forests, perfect for relaxation." />
        <Card title="Crystal Lake" content="Clear reflections of the sky and mountains create a magical view." />
        <Card title="Moonlight Lake" content="At night, the water glows softly under the silver moonlight." />
        <Card title="Whispering Pines Lake" content="Tall pine trees sway gently, filling the air with fresh fragrance." />
        <Card title="Emerald Lake" content="A jewel-toned lake nestled among snow-covered peaks." />
        <Card title="Golden Sunset Lake" content="The horizon turns golden as the sun sets over the still water." />
        <Card title="Lake Serenity" content="Calm waters surrounded by lush green forests, perfect for relaxation." />
        <Card title="Crystal Lake" content="Clear reflections of the sky and mountains create a magical view." />
      </main>
      <Footer />
    </>
  )
}

export default App
