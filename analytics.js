function handleAnalytics(trackingId) {
  const analyticsElement = document.createElement("script");
  analyticsElement.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  analyticsElement.async = true;

  document.head.append(analyticsElement);

  analyticsElement.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", trackingId);
  };
}

handleAnalytics(process.env.GA_TRACKING_ID);