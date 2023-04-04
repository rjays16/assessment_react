import React, {useState} from 'react'
import Add from "../img/img.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, db, storage} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL,} from "firebase/storage";
import { doc, setDoc} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Background from "../img/background.jpeg";

const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            console.log(res)
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                            await updateProfile(res.user, {
                                displayName,
                                photoURL: downloadURL,
                            });

                            await setDoc(doc(db, "users", res.user.uid),{
                               uid: res.user.uid,
                               displayName,
                               email,
                               photoURL: downloadURL,
                            });

                        // await setDoc(doc(db, "cities", "LA"), {
                        //     name: "Los Angeles",
                        //     state: "CA",
                        //     country: "USA"
                        // });

                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                    });
                });
        } catch (err) {
            setErr(true)
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 text-black">
                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                        <form>
                            <h3 className="fw-normal mb-3 pb-3">Log in</h3>
                            <div className="form-outline mb-4">
                                <label className="form-label">Fullname</label>
                                <input type="text" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control form-control-lg" />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control form-control-lg" required />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
                            </div>
                            <p>Don't have an account? <Link to="/login">Register</Link> here!</p>
                        </form>
                    </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src={Background} alt="" className="w-100 vh-100" />
                </div>
            </div>
        </div>
    )
}

export default Register