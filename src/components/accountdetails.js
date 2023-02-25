import React from 'react'
import styles from "../styles/Accountdetails.module.css"

const Accountdetails = () => {
  return (
    <div>
        <div className="row align-items-center justify-content-center mb-4">
            <div className="col-12 col-lg-8 col-md-8 col-sm-12 ">
                <div className=" mx-5 d-flex justify-content-center">
                    <div className={`${styles.accheader}  px-3`}>Account Details</div>
                </div>
                <div className={`${styles.accform} h-90 p-4 m-2`}>
                    <form className="row g-3">
                        <div className="d-flex align-items-center justify-content-center fs-3">
                            Personal Details
                        </div>

                        <div className="col-6">
                            <label for="inputName" className="form-label fs-4 ">Name</label>
                            <input type="text" className={`form-control ${styles.inputac}`} id="inputName" placeholder="Name"/>
                        </div>
                        <div className="col-6">
                            <label for="inputEmail" className="form-label fs-4 text-">Email</label>
                            <input type="email" className={`form-control ${styles.inputac}`} id="inputEmail" placeholder='Email'/>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-3">
                                    <label for="inputOccupation" className="form-label fs-4">Occupation</label>
                                    <input type="text" className={`form-control ${styles.inputac}`} id="inputOccupation"/>
                                </div>
                                <div className="col-3">
                                    <label for="inputAge" className="form-label fs-4 ">Age</label>
                                    <input type="text" className={`form-control ${styles.inputac}`} id="inputAge"/>
                                </div>
                                <div className="col-6">
                                    <label for="inputCity" className="form-label fs-4">City</label>
                                    <input type="text" className={`form-control ${styles.inputac}`} id="inputCity"/>
                                </div>

                                <div className="col-6 mt-3">
                                    <label for="inputState" className="form-label fs-4">State</label>
                                    <select id="inputState" className={`form-select ${styles.inputac}`}>
                                        <option selected>Choose...</option>
                                        <option>Odisha</option>
                                        <option>West Bengal</option>
                                        <option>Maharashtra</option>
                                        <option>Madhya Prades</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Chhattisgarh</option>
                                        <option>Gujurat</option>
                                        <option>Punjab</option>
                                        <option>Kerala</option>
                                        <option>Jammu and Kashmir</option>
                                        <option>Himachal Pradesh</option>
                                        <option>Meghalaya</option>
                                        <option>Mizoram</option>
                                        <option>Tripura</option>
                                        <option>Assam</option>
                                        <option>Arunachal Pradesh</option>
                                        <option>Sikkim</option>
                                        <option>Nagaland</option>
                                        <option>Karnataka</option>
                                        <option>Telangana</option>
                                        <option>Tamil Nadu</option>
                                        <option>Uttar Pradesh</option>
                                        <option>Uttarakhand</option>
                                        <option>Bihar</option>
                                        <option>Jharkhand</option>
                                        <option>Manipur</option>
                                        <option>Goa</option>
                                        <option>Rajasthan</option>
                                        <option>Haryana</option>
                                        <option>Delhi</option>
                                        <option>Puducherry</option>
                                        <option>Dadra and Nagar Haveli and Daman and Diu</option>
                                        <option>Andaman and Nicobar Islands</option>
                                        <option>Lakshadweep</option>
                                        <option>Ladakh</option>
                                    </select>
                                </div>

                                <div className="col-6 mt-3">
                                    <label for="inputZip" className="form-label fs-4 ">Pin Code</label>
                                    <input type="text" className={`form-control ${styles.inputac}`} maxlength="6" id="inputZip"/>
                                </div>

                            </div>

                        </div>
                        <div className="col-6">
                            <div><label for="inputAddress" className="form-label fs-4">Address</label>
                                <textarea type="text" className={`form-control ${styles.inputac} h-100`} id="inputAddress"
                                    placeholder="1234 Main St.."></textarea>
                            </div>

                        </div>
                        <div className="col-6">
                            <div>
                                <label for="inputAbout" className="form-label fs-4">About</label>
                                <textarea type="text" className={`form-control ${styles.inputac} h-100`} id="inputAddress"
                                    placeholder="I am interested in helping.."></textarea>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center fs-3 mt-5">
                            Bank Details
                        </div>

                        <div className="col-6">
                            <label for="inputAccName" className="form-label fs-4 ">Account Holder</label>
                            <input type="text" className={`form-control ${styles.inputac}`} id="inputAccName"
                                placeholder="Account Holder"/>
                        </div>
                        <div className="col-6">
                            <label for="inputAccNumber" className="form-label fs-4 ">Account Number</label>
                            <input type="text" className={`form-control ${styles.inputac}`} id="inputAccNumber"
                                placeholder="Account Number"/>
                        </div>
                        <div className="col-6">
                            <label for="inputIFSC" className="form-label fs-4 ">IFSC Code</label>
                            <input type="text" className={`form-control ${styles.inputac}`} id="inputIFSC" placeholder="IFSC Code"/>
                        </div>
                        <div className="mt-5 m-4 mb-3">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <button type="submit" className={`btn btn-primary ${styles.btna} `}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accountdetails