const settings = {
  "name": "wwt",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "WWT",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "wwt-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://wwt.local",
          "homepage": "/home",
          "postTypes": [
            {
              "type": "case_studies",
              "endpoint": "case_studies",
              "archive": "/case_studies"
            }
          ]
        },
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

// https://davidc213.sg-host.com