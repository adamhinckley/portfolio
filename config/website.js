const tailwind = require("../tailwind")

module.exports = {
    pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

    siteTitle: "Adam H", // Navigation and Site Title
    siteTitleAlt: "Adam", // Alternative Site title for SEO
    siteTitleShort: "Adam", // short_name for manifest
    siteHeadline: "Creating marvelous art & blazginly fast websites", // Headline for schema.org JSONLD
    siteUrl: "https://adamhinckley.com", // Domain of your site. No trailing slash!
    siteLanguage: "en", // Language Tag on <html> element
    siteLogo: "/logo.png", // Used for SEO and manifest
    siteDescription: "Playful & Colorful One-Page website with Parallax effect",
    author: "Adam Hinckley", // Author for schema.org JSONLD

    // siteFBAppID: '123456789', // Facebook App ID - Optional
    userTwitter: "@hinckleyadam", // Twitter Username
    ogSiteName: "adam", // Facebook Site Name
    ogLanguage: "en_US", // Facebook Language
    googleAnalyticsID: "UA-123339124-3",

    // Manifest and Progress color
    themeColor: tailwind.colors.orange,
    backgroundColor: tailwind.colors.blue
}