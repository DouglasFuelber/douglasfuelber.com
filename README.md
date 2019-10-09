# README

###[Live website](https://www.douglasfuelber.com)

This document has the objetive to describe the steps to run and publish the project

________________________________________________

## Setting up local environment

### Requirements

- Git
- NodeJS
- GatsbyJS

### Cloning the repository

- Create a folder to store the project
- Initiate Git in it

```sh
        git init
```

- Clone the repository and access it

```sh
        git clone https://github.com/DouglasFuelber/douglas-fuelber-gatsby.git
```

- Install project dependencies

```sh
        npm install
```

### Configuring Netlify

To store the live site we use [Netlify](https://netlify.com).

There we set up a branch of our reposity to be watched, this way, everytime a commit is pushed into this branch, it will be published.

To see how to configurate Netlify properly access the [documentation](https://www.netlify.com/docs/)

____________________________________________________________________________

## Development

As the master branch is watched to provide a continuous deployment proccess, we need to create a developement branch.

- Branch the repository

```sh
        git checkout -b [name_of_your_development_branch]
```

- To be sure that your local has the same updated code version that your remmote, execute:

```sh
        git pull origin [name_of_your_development_branch]
```

- To run locally the project, execute the following command and access [http://localhost:8000](http://localhost:8000)

```sh
        gatsby develop
```

- After changes are made, stage, commit and push your files to your new branch

```sh
        git add .
        git commit -m [your_message]
        git push origin [name_of_your_development_branch]
```

- This proccess can be done as many times you wish

____________________________________________________________________________

## Publish site

After you have made all the changes that you wanted, you can publish the site to live.

First we need to update the project locally and then merge our development branch with the master branch.

- Get all project updates

```sh
        git fetch
```

- Merge your development with your master branch

```sh
        git checkout master
        git merge [name_of_your_development_branch]
        git push origin master
```

- If auto deploy is enable, at this point Netlify will build your project and it will be live soon. Otherwise, you can access Netlify to verify and deploy manually.