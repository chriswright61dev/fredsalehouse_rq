import useNews from "../../data/reactQueryHooks/useNews";
import ImageContainer from "../../components/ImageContainer/ImageContainer";

function DrinkNews() {
  const news = useNews();
  const newsdata = news.data;
  if (news.status === "success") {
    const newsitems = newsdata.filter(
      (news) => news.news_type === "drink_news"
    );
    return (
      <div className="news">
        <ul>
          {newsitems.map((newsItem) => {
            return (
              <li key={newsItem.id}>
                <h3>{newsItem.news_title}</h3>
                <div className="newsImage">
                  {newsItem.news_image ? (
                    <ImageContainer
                      type="square"
                      source={newsItem.news_image}
                      altText={newsItem.news_title}
                      marginType="add_margin"
                    />
                  ) : null}
                </div>

                <div
                  className="newsbody"
                  dangerouslySetInnerHTML={{ __html: newsItem.news_body }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default DrinkNews;
