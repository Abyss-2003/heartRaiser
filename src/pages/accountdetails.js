import React, { useState, useEffect } from 'react'
import styles from "../styles/Profile.module.css"
import styles2 from "../styles/Accountdetails.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Accountdetails = () => {
    let initialDetails = {
        username: "",
        email: "",
        address: "",
        occupation: "",
        age: 0,
        city: "",
        state: "",
        pincode: 0,
        about: "",
        AccountHolder: "",
        AccountNumber: 0,
        IFSCcode: "",
        NGOname: "",
        NGOregd: "",
        NGOvision: "",
        NGOachiv: "",
        NGOsector: "",
        NGOcity: "",
        NGOstate: "",
        NGOpin: 0,
        NGOaddress: "",
    }
    const router = useRouter();
    const [userDetails, setUserDetails] = useState();
    console.log(userDetails)
    const [details, setDetails] = useState(initialDetails);

    const logout = () => {
        localStorage.removeItem('token');
        router.push('/');
    }

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const getUserDetails = async () => {
        const token = localStorage.getItem('token');
        const response1 = await fetch('http://localhost:5000/hackathon/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(),
        })
        const data1 = await response1.json();

        const { AccountHolder,
            AccountNumber,
            IFSCcode,
            NGOachiv,
            NGOaddress,
            NGOcity,
            NGOname,
            NGOpin,
            NGOregd,
            NGOsector,
            NGOstate,
            NGOvision,
            about,
            address,
            age,
            city,
            email,
            occupation,
            pincode,
            state,
            username
        } = data1.uzzer;
        setUserDetails({ AccountHolder,
            AccountNumber,
            IFSCcode,
            NGOachiv,
            NGOaddress,
            NGOcity,
            NGOname,
            NGOpin,
            NGOregd,
            NGOsector,
            NGOstate,
            NGOvision,
            about,
            address,
            age,
            city,
            email,
            occupation,
            pincode,
            state,
            username
        });
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        if (!userDetails) {
            const response = await fetch('http://localhost:5000/hackathon/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(details),
            })
            const fetched = await response.json();
            setDetails(fetched.info);
            if (response.status === 200) {
                toast.success('Account Details are up', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                setTimeout(() => {
                    router.push("/profile");
                }, 1200)
            }
            else {
                toast.error(`Submission Unsuccessful`, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        else {
            const response = await fetch('http://localhost:5000/hackathon/user', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(details),
            })
            const fetched = await response.json();
            if (response.status === 200) {
                console.log(fetched);
                toast.success('Account Details Updated', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else {
                console.log(fetched);
                toast.error(`Updation Unsuccessful`, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    }

    return (
        <>
            <div className={`row  ${styles.boddy} py-5`}>
                <div className={`col-lg-3 col-md-4 col-12 mb-3`}>
                    <div className={`${styles.acclsidecont} p-2 mx-auto`}>
                        <div className="mx-3 my-5 d-flex justify-content-center">
                            <img src="/pexels-lukas-628241.jpg" className={`${styles.accig} img-thumbnail`} alt="..." />
                        </div>
                        <div className={`${styles.acclside} mb-2`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2"><Link className={styles.profilelink} href="/profile">Dashboard</Link></div>
                        </div>
                        <div className={`${styles.acclside}  mb-2`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2"><Link className={styles.profilelink} href="/accountdetails">Account Details</Link></div>
                        </div>
                        <div className={`${styles.acclside} mb-2`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2" ><Link className={styles.profilelink} href="/ngodetails">N.G.O Details</Link></div>
                        </div>
                        <div className={`fixed-bottom mb-5`}>
                            <div className="text-center d-flex align-items-center justify-content-center p-2" onClick={logout}><button type="submit" className={`btn ${styles.btnl} px-2 `}>Logout</button></div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.leftborder} col-lg-9 col-md-8`}>
                    <ToastContainer
                        position="top-center"
                        autoClose={1000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                    />
                    <div className="row align-items-center justify-content-center mb-4">
                        <div className="col-12 col-lg-8 col-md-8 col-sm-12 ">
                            <div className=" mx-5 d-flex justify-content-center">
                                <div className={`${styles2.accheader}  px-3`}>Account Details</div>
                            </div>
                            <div className={`${styles2.accform} h-90 p-4 m-2`}>
                                <form className="row g-3 d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
                                    <div className="d-flex align-items-center justify-content-center fs-3">
                                        Personal Details
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="inputName" className="form-label fs-4 ">Name</label>
                                        <input type="text" className={`form-control ${styles2.inputac}`} id="inputName" placeholder="Name" name="username" value={details.username} onChange={handleChange} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="inputEmail" className="form-label fs-4 text-">Email</label>
                                        <input type="email" className={`form-control ${styles2.inputac}`} id="inputEmail" placeholder='Email' name="email" value={details.email} onChange={handleChange} />
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3">
                                                <label htmlFor="inputOccupation" className="form-label fs-4">Occupation</label>
                                                <input type="text" className={`form-control ${styles2.inputac}`} id="inputOccupation" name="occupation" value={details.occupation} onChange={handleChange} />
                                            </div>
                                            <div className="col-3">
                                                <label htmlFor="inputAge" className="form-label fs-4 ">Age</label>
                                                <input type="number" className={`form-control ${styles2.inputac}`} id="inputAge" name="age" value={details.age == 0 ? "" : details.age} onChange={handleChange} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="inputCity" className="form-label fs-4">City</label>
                                                <input type="text" className={`form-control ${styles2.inputac}`} id="inputCity" name="city" value={details.city} onChange={handleChange} />
                                            </div>

                                            <div className="col-6 mt-3">
                                                <label htmlFor="inputState" className="form-label fs-4">State</label>
                                                <select id="inputState" className={`form-select ${styles2.inputac}`} name="state" value={details.state} onChange={handleChange} >
                                                    <option></option>
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
                                                <label htmlFor="inputZip" className="form-label fs-4 ">Pin Code</label>
                                                <input type="number" className={`form-control ${styles2.inputac}`} maxLength="6" id="inputZip" name="pincode" value={details.pincode == 0 ? "" : details.pincode} onChange={handleChange} />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <div><label htmlFor="inputAddress" className="form-label fs-4">Address</label>
                                            <textarea type="text" className={`form-control ${styles2.inputac} h-100`} id="inputAddress"
                                                placeholder="1234 Main St.." name="address" value={details.address} onChange={handleChange} ></textarea>
                                        </div>

                                    </div>
                                    <div className="col-6">
                                        <div>
                                            <label htmlFor="inputAbout" className="form-label fs-4">About</label>
                                            <textarea type="text" className={`form-control ${styles2.inputac} h-100`} id="inputAddress"
                                                placeholder="I am interested in helping.." name="about" value={details.about} onChange={handleChange} ></textarea>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-center fs-3 mt-5">
                                        Bank Details
                                    </div>

                                    <div className="col-6">
                                        <label htmlFor="inputAccName" className="form-label fs-4 ">Account Holder</label>
                                        <input type="text" className={`form-control ${styles2.inputac}`} id="inputAccName"
                                            placeholder="Account Holder" name="AccountHolder" value={details.AccountHolder} onChange={handleChange} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="inputAccNumber" className="form-label fs-4 ">Account Number</label>
                                        <input type="number" className={`form-control ${styles2.inputac}`} id="inputAccNumber"
                                            placeholder="Account Number" name="AccountNumber" value={details.AccountNumber == 0 ? "" : details.AccountNumber} onChange={handleChange} required={true} />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="inputIFSC" className="form-label fs-4 ">IFSC Code</label>
                                        <input type="text" className={`form-control ${styles2.inputac}`} id="inputIFSC" placeholder="IFSC Code" name="IFSCcode" value={details.IFSCcode} onChange={handleChange} required={true} />
                                    </div>
                                    <div className="mt-5 m-4 mb-3">
                                        <div className="col-12 d-flex align-items-center justify-content-center">
                                            <button type="submit" className={`btn btn-primary ${styles2.btna} `}>{!userDetails ? "Submit" : "Update"}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accountdetails