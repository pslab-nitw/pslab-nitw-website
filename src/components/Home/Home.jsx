import Carousel from "./Carousel";
function Home() {
  return (
    <div className="home">
      <h1 className="title">Prakash Saudagar Lab @ NITW</h1>
      <h1 className="dept">Department of Biotechnology</h1>
      <Carousel />
      <div className="reasearch-description">
        <h1 className="title">Our Research Focus</h1>
        <p className="content">
          At the Leishmania Cell Culture Laboratory, our research focuses on
          delving deep into the world of Leishmania parasites and their
          interactions with host cells. We are committed to unraveling the
          complexities of these microorganisms to develop effective treatment
          strategies and control measures. Our team is comprised of passionate
          researchers and scholars who are driven by the pursuit of knowledge
          and scientific excellence.
        </p>
      </div>
      <div className="mentor-description">
        <div className="right">
          <img src="https://static.wixstatic.com/media/b862f1_c3887d80de1d4e33882b4ee268786659~mv2.jpg/v1/fill/w_504,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bt-ps_edited_edited.jpg" />
        </div>
        <div className="left">
          <h2 className="sub-title">Meet the Mentor</h2>
          <h1 className="title">Prof. Prakash Saudagar</h1>
          <p className="content">
            Associate Professor in the Department of Biotechnology at NIT
            Warangal, Dr. Prakash Saudagar brings extensive expertise in
            parasitology and drug discovery research. With a PhD from the
            prestigious Indian Institute of Technology (IIT) Guwahati, he
            specializes in understanding the molecular mechanisms of parasitic
            diseases, particularly Leishmaniasis. His research focuses on
            identifying novel drug targets and developing therapeutic strategies
            against parasitic infections.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
