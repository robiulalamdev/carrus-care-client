const Test = () => {
  const printAllDivs = () => {
    const printableDivs = document.querySelectorAll(".printable-div");
    printableDivs.forEach((div) => {
      div.style.pageBreakAfter = "always";
    });
    window.print();
    printableDivs.forEach((div) => {
      div.style.pageBreakAfter = "unset";
    });
  };

  return (
    <div>
      <div className="printable-div">Content of div 1</div>
      <div className="printable-div">Content of div 2</div>
      <div className="printable-div">Content of div 3</div>
      <div className="printable-div">Content of div 4</div>
      <button onClick={printAllDivs}>Print All Divs</button>
    </div>
  );
};

export default Test;
