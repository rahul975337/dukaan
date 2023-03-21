import Search from "./Seach";

function FormTop() {
  return (
    <div className="form__top">
      <div className="form__details">
        <p className="title">Free Slogan Maker</p>
        <p className="desc">
          Simply enter a term that describes your business or service, and
          generate catchy slogans.
        </p>
      </div>

      <div className="input">
        <p className="input__label">Word for your slogan</p>
        <Search />
      </div>

      <button className="generate__button">Generate Slogans</button>
    </div>
  );
}
export default FormTop;
