const Title = (props) => {
  return (
    <div className="title">
      {props.dataLength ? (
        <>
          <h2>Our tours</h2>
          <div className="underline"></div>
        </>
      ) : (
        <>
          <h2>No Tours Left</h2>
          <button className="btn" onClick={props.refresh}>
            Refresh
          </button>
        </>
      )}
    </div>
  );
};

export default Title;
