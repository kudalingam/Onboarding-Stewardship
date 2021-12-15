const TeamCard = (props) => {
  const {
    User_id,
    Email_id,
    Name,
    Type,
    DOB,
    Aadhar,
    Pan,
    IFSC_Code,
    accountNumber,
    Bank_name,
    linkedin,
    github,
    Gender,
    Address,
    ph_no,
  } = props.profile;
  return (
    <>
      <div className="card mx-2 my-3">
        <div className="card-body">
          <div className="row ">
            <div className="col-4 float-end d-flex">
              <p className="fw-bold me-2">Name : </p>
              {Name} -{User_id}
            </div>
            <div className="col-4 float-end d-flex">
              <p className="fw-bold me-2">Email : </p>
              {Email_id}
            </div>
            <div className="col-4 float-end d-flex">
              <p className="fw-bold me-2">Type :</p>
              {Type}
            </div>
          </div>
          <div className="row">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${User_id}One`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${User_id}One`}
                  >
                    More Info{" "}
                    <i
                      className="far fa-hand-point-down ms-2 text-info mt-1"
                      style={{ fontSize: "23px" }}
                    />
                  </button>
                </h2>
                <div
                  id={`flush-collapse${User_id}One`}
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    <div className="row mx-4 my-2">
                      <div className="col-6">
                        <p>
                          <span className="fw-bold">Gender : </span>
                          {Gender}
                        </p>
                      </div>
                      <div className="col-6">
                        <p>
                          <span className="fw-bold">DOB : </span>
                          {DOB && DOB.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                    <div className="contact-Indentity">
                      <div className="row mx-4 my-2">
                        <div className="col-6">
                          <p>
                            <span className="fw-bold">Aadhar No : </span>
                            {Aadhar}
                          </p>
                        </div>
                        <div className="col-6">
                          <p>
                            <span className="fw-bold">PAN No : </span>
                            {Pan}
                          </p>
                        </div>
                      </div>
                      <div className="row mx-4 my-2">
                        <div className="col-6">
                          <p>
                            <span className="fw-bold">Address: </span>
                            {Address}
                          </p>
                        </div>
                        <div className="col-6">
                          <p>
                            <span className="fw-bold">Phone No : </span>
                            {ph_no}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="social">
                      <div className="row mx-4 my-2">
                        <div className="col-6">
                          <p>
                            <span className="fw-bold">Github : </span>
                            {github}
                          </p>
                        </div>
                        <div className="col-6">
                          <p>
                            <span className="fw-bold">Linkedin : </span>
                            {linkedin}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="Bank">
                      <div className="row mx-4 my-2">
                        <div className="col-4">
                          <p>
                            <span className="fw-bold">Bank name : </span>
                            {Bank_name}
                          </p>
                        </div>
                        <div className="col-4">
                          <p>
                            <span className="fw-bold">Account No: </span>
                            {accountNumber}
                          </p>
                        </div>
                        <div className="col-4">
                          <p>
                            <span className="fw-bold">IFSC Code: </span>
                            {IFSC_Code}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
