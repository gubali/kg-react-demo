let MiniCalculator = () => {
  const btnList = [
    'C',
    '1',
    '2',
    '+',
    '3',
    '4',
    '-',
    '5',
    '6',
    '*',
    '7',
    '8',
    '/',
    '=',
    '9',
    '0',
    '.'
  ];
  return (
    <div className="container">
      <h3 className="text-danger mb-3 mt-3">Mobile Calculater</h3>
      <div className="row">
        <div className="col-lg-5 col-xs-5"></div>
        <div className="col-lg-2 col-xs-2">
          <input type="text" id="result" className="form-control"></input>
          <div className="btn-container">
            {btnList.map(item => <button type="button" id="result"
             className="btn btn-danger my-1 mx-1" key={item}>{item}</button>)}
          </div>
        </div>
        <div className="col-lg-2 col-xs-2"></div>
      </div>
    </div>
  )
}

export default MiniCalculator;