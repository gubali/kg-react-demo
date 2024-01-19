let MiniCalculator = () => {
  const btnList = [
    'C',
    '1',
    '2',
    '3',
    '4'
  ];
  return (
    <div className="container">
      <h3 className="text-danger mb-3 mt-3">Mobile Calculater</h3>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <input type="text" id="result" className="form-control"></input>
          <div className="btn-container">
            {btnList.map(item => <button type="button" id="result"
             className="btn btn-danger" key={item}>{item}</button>)}
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  )
}

export default MiniCalculator;