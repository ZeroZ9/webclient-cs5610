export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Saturn from NASA:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Saturn and its rings"
        src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~orig.jpg"
      />
      <br />
      Pikachu
      <br />
      <img 
        id="wd-your-image"
        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
        alt="A Pikachu"
      />
    </div>
  );
}