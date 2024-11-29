import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import MovieList from "./MovieList";
import Filtre from './Filtre';
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([
    // listes des films
    {
      title: "Black Panther",
      description: "Après la mort de son père, T'Challa revient chez lui prendre sa place sur le trône du Wakanda, une nation africaine technologiquement très avancée. Mais lorsqu'un vieil ennemi resurgit, le courage de T'Challa est mis à rude épreuve, aussi bien en tant que souverain qu'en tant que Panthère Noire.",
      posterURL: "https://cdn.britannica.com/36/198336-050-A9B8AA86/Chadwick-Boseman-Tchalla-Black-Panther-Black.jpg",
      note: 10,
      videoURL: "https://www.youtube.com/embed/DlGIWM_e9vg?si=iA5RNq_2YRKaTP3b",
    },
    {
      title: "Women King",
      description: "ans les années 1800, un groupe de guerrières entièrement féminines protège le royaume africain du Dahomey avec des compétences et une férocité sans précédent dans le monde. Confronté à une nouvelle menace, le général Nanisca forme la prochaine génération de recrues pour lutter contre un ennemi étra…",
      posterURL: "https://fr.web.img6.acsta.net/pictures/22/07/22/15/59/5308737.jpg",
      note: 10,
      videoURL: "https://www.youtube.com/embed/v-tJFRMOOu4?si=jCfQ-2HaIsG-bQAr",
    },
    {
      title: "Step Up 3",
      description: "Récemment diplômé de l'université de New York, Moose rejoint la team de danseurs de rue à laquelle appartiennent Luke et Natalie. Afin de se faire remarquer par des professionnels, ils décident de participer ensemble à une compétition de haut niveau au cours de laquelle s'affronteront les meilleurs street dancers du monde.",
      posterURL: "https://i.ytimg.com/vi/89TLbK6o-og/hqdefault.jpg",
      note: 9.5,
      videoURL: "https://www.youtube.com/embed/rnM8XsuKi0M?si=1PxHJ7K_4nq5XQe8",
    },
    {
      title: "Everything, Everything",
      description: "Maddy est une jeune femme de 18 ans qui ne peut pas quitter son environnement fermé hermétiquement à cause d'une maladie. C'est une adolescente qui a vécu à l'écart du monde parce qu'elle est allergique à tout. Elle tombe amoureuse du garçon qui emménage dans la maison voisine de la sienne.",
      posterURL: "https://cdn2.penguin.com.au/covers/original/9780552576482.jpg",
      note: 9,
      videoURL: "https://www.youtube.com/embed/IIY7m41S4aE?si=JjHNHi2ppMPqvNxv",
    },
    {
      title: "Venom",
      description: "Eddie et Venom sont en fuite. Pourchassés par leurs deux mondes. Alors que le filet se rapproche, le duo est contraint de prendre une décision dévastatrice qui mettra fin à la dernière danse de Venom et Eddie.",
      posterURL: "https://www.sonypictures.fr/sites/france2/files/2021-10/VENOM-affiche-450x600.jpg",
      note: 9.5,
      videoURL: "https://www.youtube.com/embed/uCJu2RjSZyE?si=0dZjsWkduYsdTSh5&amp;start=4",
    },
    {
      title: "Amour complexe",
      description: "Une pop star en herbe, Erica, accepte de chanter au mariage de son ex-fiancé alors que sa carrière était au point mort. Elle décide de garder secrète leur relation passée auprès de la future épouse, Beverly. Bientôt, Erica ressent à nouveau des sentiments pour son ex, Jason, malgré les tentatives de…",
      posterURL: "https://www.premiere.fr/sites/default/files/styles/partage_rs/public/2021-07/Screen-Shot-2021-07-07-at-7.19.32-PM.jpg",
      note: 9,
      videoURL: "https://www.youtube.com/embed/dYU2hS4NjRc?si=fIUd6Yx782oJqMfh&amp;start=2",
    },
    {
      title: "A travers ma fenêtre",
      description: "Amoureuse depuis longtemps de son voisin Ares, Raquel l'observe secrètement. Elle découvre enfin que ses sentiments sont réciproques, mais la famille du jeune homme ne voit pas l'histoire d'un très bon œil et le jeune couple se retrouve impliqué malgré lui dans des situations pas très saines..",
      posterURL: "https://media.hachette.fr/fit-in/780x1280/imgArticle/LIVREDEPOCHEJEUNESSE/2023/9782017240297-001-X.jpeg?source=web",
      note: 8.5,
      videoURL: "https://www.youtube.com/embed/6rapu2A1R9g?si=QgHXOq_VmnUWeu9h&amp;start=2",
    },
  ]);
// debut hooks/usestate
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    note: "",
    videoURL: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [Note, setNote] = useState(0);
  const [currentVideoURL, setCurrentVideoURL] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  

  const handleMoreDetails = (videoURL) => {
    setCurrentVideoURL(videoURL);
    setShowVideoModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    setMovies([...movies, { ...newMovie, note: Number(newMovie.note) }]);
    setShowModal(false);
    setNewMovie({ title: "", description: "", posterURL: "", note: "" ,videoURL:""});
  };
//filtrage
  const filteredMovies = movies.filter(
    (movie) =>
      (!searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!Note || movie.note === Note)
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center' , color:"mediumorchid" }}>RealMovies</h1>
      <p style={{ 
          textAlign: 'center', 
          fontSize: '18px', 
          fontWeight: '500', 
          margin: '20px auto', 
          maxWidth: '600px', 
          lineHeight: '1.5', 
          color: 'white' 
}}>
  Bienvenue dans mon site Web! <br />
  Vous trouverez quelques-uns de mes FavMovies. <br />
  Vous pouvez  ajouter vos propres films préférés. Merci!
</p>

  {/* Filter Component */}
  <div style={{  marginLeft: '70%' }}>
    <Filtre setSearchTerm={setSearchTerm} setNote={setNote} />
  </div>

      {/* Add Movie Button */}
      <Button
          variant="primary"
          onClick={() => setShowModal(true)}
          style={{
            margin: "20px auto",
            display: "block",
            position: "fixed",
            bottom: "20px",
            right: "8px",
            backgroundColor:"mediumpurple",
          }}
        >
          Add New Movie
    </Button>


      {/* ajouter un film */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formMovieTitle">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Donnez un titre"
                name="title"
                value={newMovie.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMovieDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Entrez une description"
                name="description"
                value={newMovie.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPosterURL">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez l'URL"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formMovieNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="number"
                placeholder="Entrez une note"
                name="note"
                value={newMovie.note}
                onChange={handleInputChange}
                min="0"
                max="10"
              />
            </Form.Group>
            <Form.Group controlId="formvideoURL">
              <Form.Label>Vidéo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez la vidéo"
                name="videoURL"
                value={newMovie.videoURL}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Add un film
          </Button>
        </Modal.Footer>
      </Modal>

      {/* affichage */}
      <MovieList 
  movies={filteredMovies.length > 0 || searchTerm || Note ? filteredMovies : movies} 
  onMoreDetails={handleMoreDetails} 
/>

      <Modal show={showVideoModal} onHide={() => setShowVideoModal(false)}>
      <Modal.Header closeButton>
  <Modal.Title style={{ color: 'black' }}>Bande annonce</Modal.Title>
</Modal.Header>

  <Modal.Body>
    {currentVideoURL ? (
      <iframe
        width="100%"
        height="315"
        src={currentVideoURL}
        title="Movie"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <p>No video available.</p>
    )}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowVideoModal(false)}>
      Close
    </Button>
  </Modal.Footer>
</Modal>

    </div>
  );
};


export default App;
