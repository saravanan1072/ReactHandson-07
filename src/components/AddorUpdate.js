import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { userAdded, userUpdated } from "../store/StudentDataSlice";

const AddorUpdate = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
    id: "",
  })

  const users = useSelector((state) =>
    state.users.find((user) => user.id === id)
  )
  useEffect(() => {
    if (id === undefined) {
      setDetails({
        name: "",
        age: "",
        course: "",
        batch: "",
        id: "",
      })
    } else if (id === users.id) {
      setDetails({
        name: users.name,
        age: users.age,
        course: users.course,
        batch: users.batch,
      })
    }
  }, [users, id])

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (id === undefined) {
      let newDetails = {
        ...details,
        id: Math.floor(Math.random() * 10000).toString(),
      }
      dispatch(userAdded(newDetails)) // adding new details
    } else {
      dispatch(
        userUpdated({
          name: details.name,
          age: details.age,
          course: details.course,
          batch: details.batch,
          id: id,
        })
      )
    }
    navigate("/students")
  }

  return (
    <Box>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputRow">
          <TextField
            label="Name"
            variant="outlined"
            margin="dense"
            id="name"
            type="text"
            name="name"
            required
            value={details.name}
            onChange={handleChange}
            className="input"
          />

          <TextField
            label="Age"
            variant="outlined"
            margin="dense"
            id="age"
            type="number"
            name="age"
            required
            value={details.age}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="inputRow">
          <TextField
            label="Course"
            variant="outlined"
            margin="dense"
            id="course"
            type="text"
            name="course"
            required
            value={details.course}
            onChange={handleChange}
            className="input"
          />

          <TextField
            label="Batch"
            variant="outlined"
            margin="dense"
            id="batch"
            type="text"
            name="batch"
            required
            value={details.batch}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="buttonContainer">
          {" "}
          <Link to="/students" className="link">
            <button className="button cancel">Cancel</button>
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </div>
      </form>
    </Box>
  )
}

export default AddorUpdate