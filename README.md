## Overview

Getting [Silverstripe 4](http://doc.silverstripe.org/framework/en/installation/),
[react-create-app](http://doc.silverstripe.org/framework/en/installation/),
and [webpack3](https://webpack.js.org/) to play nice  

  
  This Project will get you up and running with the following installed
  * SilverStripe 4 framework and CMS
  * GraphQL
  * ReactJS
  * Webpack

## Installation ##

* git clone[https://github.com/dunatron/react-add-form.git](https://github.com/dunatron/react-add-form.git)
* composer install 

## Build Scripts ##
* yarn install 
* yarn run build:dev
* yarn add webpack -g
* yarn webpack 


## Bugtracker ##

Bugs are tracked on github.com ([framework issues](https://github.com/silverstripe/silverstripe-framework/issues),
[cms issues](https://github.com/silverstripe/silverstripe-cms/issues)). 
Please read our [issue reporting guidelines](http://doc.silverstripe.org/framework/en/misc/contributing/issues).

## Development and Contribution ##

If you would like to make changes to the SilverStripe core codebase, we have an extensive [guide to contributing code](http://doc.silverstripe.org/framework/en/misc/contributing/code).

## Links ##

 * [Changelogs](http://doc.silverstripe.org/framework/en/changelogs/)
 * [Bugtracker: Framework](https://github.com/silverstripe/silverstripe-framework/issues)
 * [Bugtracker: CMS](https://github.com/silverstripe/silverstripe-cms/issues)
 * [Bugtracker: Installer](https://github.com/silverstripe/silverstripe-installer/issues)
 * [Forums](http://silverstripe.org/forums)
 * [Developer Mailinglist](https://groups.google.com/forum/#!forum/silverstripe-dev)
 * [License](./LICENSE)
 
## Release Process ##
* `git checkout -b develop`
* `git pull origin develop`

This will bring your environment up to date with the `develop` branch.   
You should then create a branch e.g `feature/add-some-feature`
* `git checkout -b feature/add-some-feature`  

when you are done developing your feature you need to push your feature branch to the repository and reaise a pull request

* `git push origin HEAD` **OR** `git push origin feature/add-some-feature`

You then need to[raise a pull request](https://github.com/dunatron/react-add-form/pulls) between your feature branch and the develop branch

**Merging to master branch**  


* `git checkout develop`
* `git pull origin develop`
* run `git fetch origin --tags` this will get all the current tags so you can tag the next release, the tag to use is next in the sequence
* next we switch to release branch `git checkout -b RELEASE/x.x.x`
* `git add -A`
* `git commit -m "RELEASE x.x.x"`
* git tag x.x.x
* git push origin x.x.x
* `git push origin HEAD` **OR** `git push origin RELEASE/x.x.x`
* (NOTE check this) `git pull origin master` if this pull fails something has gone wrong

**Once the release has been merged to master**  

The develop branch will be behind by one commit so we need to bring the `develop` branch up to date with master
* `git checkout develop`
* `git pull origin master` 
* `git push origin develop`

## Editing this doc ##
NOTE:  

md new line just end current line with 2 blank spaces  
  
DO: create a new pull request when editing