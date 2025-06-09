import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-4  " style={{ width: "18rem" }}>
      <img  src={src ? src : image}   style={{ height:"200px"  }} className="card-img-top" alt="fallback" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,70):"NEws is upadted soon"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
