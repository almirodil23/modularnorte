import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    if (window.$) {
      window.$(".preloader").fadeOut("fast");
    }
  }, []);

  return (
    <div className="preloader">
      <div>
        <div className="tenor-gif-embed" data-postid="22299362" data-share-method="host" data-aspect-ratio="1.77778" data-width="100%"><a href="https://tenor.com/view/loading-gif-22299362">Loading GIF</a>from <a href="https://tenor.com/search/loading-gifs">Loading GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      </div>
    </div>
  );
}
