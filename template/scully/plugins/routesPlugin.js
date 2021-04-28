const { registerPlugin } = require('@scullyio/scully');
const { httpGetJson } = require('@scullyio/scully');
// const sanityClient = require('@sanity/client');


const Routes = 'routes';

const getApiVersion = () => {
  const currenDate = new Date();
  return `v${currenDate.toISOString().split('T')[0]}`;
}

const generateSanityUrl = (config) => {
  return `https://${config.projectId}.api.sanity.io/${getApiVersion()}/data/query/${config.dataset}?query=`;
}

const routesPlugin = async (route, config) => {
  const url = `${generateSanityUrl(config)}*[_type == "route"]`;

  return httpGetJson(url)
    .then(json => {
      const handledRoutes = [];
      for (let item of json.result) {
        let slug = item.slug.current.toString();
        if (slug[0] !== '/') {
          slug = '/' + slug;
        }
        handledRoutes.push({
          route: slug
        });
      }

      return handledRoutes;
    });  
};

// no validation implemented
const routesPluginValidator =  async conf => [];
registerPlugin('router', Routes, routesPlugin);
exports.Routes = Routes;