// vercel configurations VERY IMPORTANT

module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_yH0pcXwOMZGe4EUbzFP0GeJowLSY/21EEnmi3yg",
        apiToken: "7f5oR2g3hZAai1NTThWkE8yN",
        appFilter: "strapi-vercel",
        teamFilter: "team_UlrE6BnP12ZNkAJdk18T2grZ",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });