import Header from "../components/Header";
import PlantCard from "../components/PlantCard";

import {
  plants,
  categories
} from "../data/plants";

function ProductsPage() {
  return (
    <div className="app-page">

      <Header />

      <main className="products-page">

        <section className="products-heading">
          <p className="section-eyebrow">
            BRING NATURE HOME
          </p>

          <h2>
            Our Beautiful Plants
          </h2>

          <p>
            Choose from our collection of carefully
            selected plants for your home.
          </p>
        </section>

        {categories.map((category) => {

          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="plant-category"
              key={category}
            >

              <div className="category-heading">
                <h3>{category}</h3>

                <span>
                  {categoryPlants.length} plants
                </span>
              </div>

              <div className="plants-grid">

                {categoryPlants.map((plant) => (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                  />
                ))}

              </div>

            </section>
          );
        })}

      </main>

    </div>
  );
}

export default ProductsPage;