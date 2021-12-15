const Comments = ({ id, comments }) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush${id}id`}
            aria-expanded="false"
            aria-controls={`#flush${id}id`}
          >
            Comments
          </button>
        </h2>
        <div
          id={`flush${id}id`}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{comments}</div>
        </div>
      </div>
    </>
  );
};

export default Comments;
