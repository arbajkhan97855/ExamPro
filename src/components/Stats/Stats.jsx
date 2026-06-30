function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Students"
    },
    {
      number: "500+",
      title: "Exams Conducted"
    },
    {
      number: "100+",
      title: "Teachers"
    },
    {
      number: "99%",
      title: "Success Rate"
    }
  ];

  return (
    <section className="stats-section py-5">
      <div className="container">

        <div className="row g-4">

          {stats.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="stats-card">

                <h2>{item.number}</h2>

                <p>{item.title}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;