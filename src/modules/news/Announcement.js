import useNews from "../../data/reactQueryHooks/useNews";
import "./Announcement.css";
function Announcement() {
  const news = useNews();
  const newsdata = news.data;

  if (news.status === "success") {
    const announcements = newsdata.filter((news) => news.news_announcement);
    if (announcements.length > 0) {
      const announcement = announcements[0].news_announcement;

      return (
        <div className="announcement">
          <h3>{announcement}</h3>
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}
export default Announcement;
