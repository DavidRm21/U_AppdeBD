
export const Home = () => {

  const topics = ['Ciudades', 'Paises', 'Lenguajes']

  return (
    <main className="main-home">
        <section className="home-container">

          <h3 className="primary-text">Base de datos del mundo</h3>

          <div className="random-info">
            <p className="random random-primary-photo"/>
          </div>

        </section>

        <aside className="aside-container">
          <span className="primary-text"><b>Encuentra</b></span>
          {topics.map((item) => (
            <div key={item}>
              <div className="card-total"><b>{item}</b></div>
            </div>
          ))}
        </aside>
    </main>
  );
};
