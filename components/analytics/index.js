import GA from "./GoogleAnalytics";
import siteMetadata from "@/data/siteMetadata";
const Analytics = () => {
  return <GA id={siteMetadata.analytics.googleAnalyticsId} />;
};

export default Analytics;
