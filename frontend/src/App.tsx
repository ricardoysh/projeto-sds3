import BarChart from "components/Barchart";
import DataTable from "components/datatable";
import Footer from "components/footer";
import NavBar from "components/navbar";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6 text-center text-secondary">
            <h5>Todas vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
