<p align="center">
  <a href="" rel="noopener">
 <img width=231.24px height=267.94px src="./docs/stc-logo.png" alt="Project logo"></a>
</p>

<h3 align="center">Sunway Tech Club Official Website</h3>


---

<p align="center"> This is the repo for Sunway Tech Club official website, written with Sveltejs
    <br> 
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Contributing](https://github.com/sunwaytechclub/sunwaytechclub.org-frontend/blob/master/CONTRIBUTE.md)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

To get it up and running, you will need to have [Nodejs](https://nodejs.org/en/download/)

After you had installed Nodejs, you will need to install [Git](https://git-scm.com/).

### Installing

This is a step by step to get this repository on your local machine

First, clone this repo using your terminal (cmd or bash 👀)

Then simply run:

```bash
npm install
```

This repo is configured with `sirv` with SPA mode, hence simply run:

```bash
npm run dev
```

or

```bash
npm run start
```

You should see a server spun up in your localhost!

### Build

To generate production build, run:

```bash
npm run build
```

Do note that this is a Single-Page-Application, hence you will have to enable SPA mode for your server, `sirv` had been installed in this package hence you can run `sirv public --single` ( or `npm run start` ) to serve the files in SPA mode

### PWA

To eject PWA mode, simply run the command `DISABLE_PWA=true npm run build`

## 🛠 Usage <a name = "usage"></a>

> If you ever encountered any unexpected behavior, try to open it in incognito mode :/

This template is made with the philosophy of Encapsulation, all units should be able to deploy anywhere.

A sample file for the unit's routes is inside `/src/routes.sample.js`. Simply copy that file and paste it into your unit's folder!

After that, if it's a first-level router ( such as the routes inside `/event` in this template ), add it in the `/src/routes.js` as shown in this template.

And that's it! 🥳 no need to import any sveltejs routing component and you get routing for free!

### Routing

For more information on how to do routing, please refer to [https://github.com/pupubird/sveltejs-router-template](https://github.com/pupubird/sveltejs-router-template#routesjs)

## 🚀 Deploy <a name = "deploy"></a>

### With [Vercel](https://vercel.com/)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

run `vercel` to configure your credential, else you do not have an account, simply go to their website and sign up one!

then, simply run:

```bash
vercel deploy
```

And configure each setting to your own preferences.
