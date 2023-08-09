import "./App.css";
// import { db } from "./config/firebase";
import { Auth } from "./component/Auth";
import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { auth, db, storage } from "./cofig/firebase";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [movieList, setMovieList] = useState([]);
  // new Movie State
  const [newMovietitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setisNewMovieOscar] = useState(false);

  // Update the title state
  const [updatedTitle, setUpdatedTitle] = useState("");

  // file upload state
  const [fileUpload, setFileUpload] = useState("");

  const movieCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    // read the data
    // set the movie list
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log(filteredData);
      setMovieList(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMovietitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
        userId: auth?.currentUser?.uid,
      });
      getMovieList();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
  };

  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: updatedTitle });
  };

  const uploadFiles = async () => {
    if (!fileUpload) return;
    const filefolderref = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolder, fileUpload);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <Auth />
      <>
        <div>
          <input
            placeholder="Movie Title....."
            onChange={(e) => setNewMovieTitle(e.target.value)}
          />
          <input
            placeholder="Release Date....."
            type="number"
            onChange={(e) => setNewReleaseDate(Number(e.target.value))}
          />

          <input
            type="checkbox"
            checked={isNewMovieOscar}
            onChange={(e) => setisNewMovieOscar(e.target.checked)}
          />
          <label htmlFor="">Reacieved An Oscar</label>
          <button onClick={onSubmitMovie}>Submit Data</button>
        </div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "blue" }}>
              {movie.title}
            </h1>
            <p>Date:{movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete mOvie</button>
            <input
              placeholder="new Title...."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateMovieTitle(movie.id)}>
              Update title
            </button>
            {/* create the new function and de;ete that out by passing the id on the function name deleteMovie */}
          </div>
        ))}
        <div>
          <input
            type="file"
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
          <button onClick={uploadFiles}>Upload Files</button>
        </div>
      </>
    </div>
  );
}

export default App;
