import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from "./data"
console.log(data)

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        imageUrl={item.imageUrl}
        location={item.location}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        googleMapsUrl={item.googleMapsUrl}

      />

    )
  })


  return (
    <div>
      <Header />
      <section>{cards}</section>
    </div>
  );
}

export default App;
