console.log('Hello from custom.js');

//START --- Google Analytics ---
//STANDARD CODE with edit to first line from 'async src' to 'googleAnalyticsUrl.src'

  var googleAnalyticsUrl = document.createElement('script');
  googleAnalyticsUrl.src = "https://www.googletagmanager.com/gtag/js?id=G-HNFWXGE46M";
  googleAnalyticsUrl.type = 'text/javascript';
  googleAnalyticsUrl.async = true;
  document.head.appendChild(googleAnalyticsUrl);

  var googleAnalyticsCode = document.createElement('script');
  googleAnalyticsCode.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HNFWXGE46M');`;
  document.head.appendChild(googleAnalyticsCode);

  //END - Google Analytics ---