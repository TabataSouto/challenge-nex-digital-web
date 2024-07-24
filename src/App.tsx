import { ChangeEvent } from "react";

function App() {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(target.files);
  };

  return (
    <section>
      <form>
        <label>Upload Excel</label>
        <br />
        <input
          type="file"
          className="form-control"
          id="file"
          accept=".xlsx"
          onChange={handleChange}
        />
        <br />
        <br />
        {/* <button onClick={this.handleFile}>Upload</button> */}
      </form>
    </section>
  );
}

export default App;
