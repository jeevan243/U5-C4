// User should be able to add/create new meetups

import { useState } from "react";
import axios from "axios";
export const AddMeetup = () => {
  const [meetup, setMeetup] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    theme: "",
    description: "",
    image: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(meetup);
    axios.post("http://localhost:8080/meetups", meetup).then((res) => {
      alert("your regestration successfull");
    });
  }
  function handleChange(e) {
    const { id, value } = e.target;
    setMeetup({ ...meetup, [id]: value });
  }
  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input
          type="text"
          className="title"
          id="title"
          onChange={() => {}}
          required
        />
        <label>Location</label>
        <select className="location" id="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          id="date"
          onChange={handleChange}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          id="time"
          onChange={handleChange}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select className="theme" id="theme" onChange={handleChange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          id="description"
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          id="image"
          onChange={handleChange}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
