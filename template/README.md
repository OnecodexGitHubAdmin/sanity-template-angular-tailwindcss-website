# Angular Starter Template For Sanity.io

This project is an angular starter template for [sanity.io](https://sanity.io).
It can be used as a website, blog or even a web shop. All the different types are prepared as show case.

<p style="text-align: center;"><img src="https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/raw/master/assets/website.png?raw=true" width="450"></p>

## Tooling and technologies
* Angular
* Netlify
* NgRx
* NX
* Sanity
* Scully

You can easily extend the project with Tailwind CSS, Material or others as usual in angular projects

## Structure

The project is split into two different applications (in the apps folder).
<p style="text-align: center;"><img src="https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/raw/master/assets/structure.png?raw=true" width="300"></p>

The studio app is for defining and configure your types, pages and products.
The web app is the angular client. 
There's also a folder web-e2e which you can use for creating cypress e2e tests for the angular app.

## Add a new sanity type (schema: like a product, page or blog)
If you want to create or edit types. You can navigate to the studio/schemas folder.
Here you'll find documents and objects.
Documents define (document-) types like pages, blogs, products or similar.
In the objects folder you can find elements which you can use inside the different document types.
You can simply create the types you need.
For further information see [Sanity.io Schema Types Documentation](https://www.sanity.io/docs/schema-types)

For the newly created type you generate a new component in src/app/components/elements. I recommend using nx for that (se documentation below), since you're inside an nx workspace.
<p style="text-align: center;"><img src="https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/raw/master/assets/web-elements.png?raw=true" width="300"></p>

Your new component must extend the DynamicComponent interface and implement the data input property which is defined as a type that extends SanityType interface.
<p style="text-align: center;"><img src="https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/raw/master/assets/angular-component.png?raw=true" width="450"></p>

Now you need to introduce your newly generated dynamic component to the resolvers.
If your element is a document type, you need to introduce it to the content component:
<p style="text-align: center;"><img src="https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/raw/master/assets/content-component-location.png?raw=true" width="300"></p>
And implement the new case:
<p style="text-align: center;"><img src="https://github.com/OnecodexGitHubAdmin/sanity-template-angular-website/raw/master/assets/content-component.png?raw=true" width="300"></p>

**Please also ensure that you have included the new document type in the fetchContent method in sanity.service.ts **
Therefore you should have a look into [Sanity GROQ queries](https://www.sanity.io/docs/query-cheat-sheet)

## Run your project locally

**Before you can develop locally, you need to add your local angular client url (usually: https://localhost:4200) to the CORS policies in your sanity.io project. This can be done in the administration page at [sanity.io](https://sanity.io)**

1. **Install dependencies with `npm install` in the root folder.**.

2. **Run `sanity install` in `/apps/studio`** This will install the necessary dependencies for Sanity Studio.

4. **Run `npm run serve:all` in `/`**. This will start the development servers for the Angular frontend and Sanity Studio.

5. **Run `npm run build` in `/apps/web` and then `npm run scully`**. This will build the Angular frontend and generate a static site which can be deployed anywhere (if you're not using netlify).

For testing your changes you can always run the apps locally using:

`serve:all`

since you're in an nx workspace this will bootstrap both applications (studio and web).

**Please note that you need to initially run 'npm i' or 'yarn i' in the root folder and 'sanity install' in /apps/studio**

If you don't want to use netlify for the web app. You can also generate the static site locally or on any build server. Therefore navigate to apps/web and run:
`npm run build`
and then
`npm run scully`
This will generate static files int dist/static which you can then copy to any server.


If you don't want to deploy sanity studio to netlify you can simply navigate to apps/studio and run:
`npm run build`
Although I didn't test this, you should also be able to copy this to your server


## Nx workspace

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@template/mylib`.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

If you have any questions regarding this template please [write me an email](mailto:magnus.wolf@onecodex.ch).

For questions regarding Sanity, visit the [Sanity.io Documentation](https://www.sanity.io/docs) to learn more.

For questions regarding Nx, visit the [Nx Documentation](https://nx.dev/angular) to learn more.
