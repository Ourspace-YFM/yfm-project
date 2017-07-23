# OurSpace

## Overview
- A communications platform that aims to streamline the operations of Your Fleet Media

## Pre-code planning
### User Stories
- As a YFM Director, I want be able to view the status of all open projects, jobs and callouts.
- As a YFM Operations Manager, I want to be able to view all important details relating to all client trucks managed by YFM
- As YFM's director I want to be able to search and filter all client assets using an appropriate key/keys: Asset owner (company name), location, damage flags.
- As YFM's director I want to be able to search and filter all locations using an appropriate key/keys: Company (name), company (role), type/services, location (state).
- As YFM's director I want to be able to search and filter all companies using an appropriate key/keys: Company name, type/services, location (state).
- As YFM's director I want to be able to search and filter all contacts using an appropriate key/keys: Company name, type/services, location (state).

### MVP Features
- View all projects. jobs, callouts and bookings
- View all client trucks
- Search and filter client assets, locations, companies and contacts
- Add a booking

### Starting the application
#### Start API Server
1. `$ cd yfm-project/api`
2. `$ yarn`
3. `$ yarn dev`
4. Stage seeds: `localhost:7000/setup`

#### Start React Front-End
1. `$ cd yfm-project/react-web`
2. `$ yarn`
3. `$ yarn start`

#### Project Dependencies & Libraries
**Front-End**
| Dependency | Version |
|---|---|
| axios | 0.16.2 |
| google-map-react | 0.24.0 |
| lodash | 4.17.4 |
| material-ui | 0.18.6 |
| react | 15.6.1 |
| react-a11y | 0.3.4 |
| react-dom | 15.6.1 |
| react-router-dom | 4.1.1 |
| react-tap-event-plugin | 2.0.1 |
| recompose | 0.24.0 |
| eslint | 3.19.0 |
| eslint-config-airbnb | 15.0.2 |
| eslint-plugin-import | 2.7.0 |
| eslint-plugin-jsx-a11y | 5.1.1 |
| eslint-plugin-react | 7.1.0 |
| gulp | 3.9.1 |
| gulp-coffee | 2.3.4 |
| gulp-concat | 2.6.1 |
| gulp-sass | 3.1.0 |

**Back-End**
| Dependency | Version |
|---|---|
| eslint | 3.19.0 |
| eslint-config-airbnb | 15.0.2 |
| eslint-plugin-import | 2.7.0 |
| eslint-plugin-jsx-a11y | 5.1.1 |
| eslint-plugin-react | 7.1.0 |
| nodemon | 1.11.0 |
| body-parser | 1.17.2 |
| cors | 2.8.3 |
| express | 4.15.3 |
| mongoose | 4.11.0 |
| mongoose-seed | 0.3.2 |
| passport | 0.3.2 |
| passport-jwt | 2.2.1 |
| passport-local | 1.0.0 |
| passport-local-mongoose | 4.0.0 |


### Database design
- MVP Database
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/mvp-db.png "MVP Database")

- Future Database
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/db.png "Future Database")

### Workflow Overview
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/workflow-overview.png "Workflow Overview")

## Wireframes

### Style Guide
- Pulled from YFM Brand Guideline:

![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/brand-guide.jpg "Brand Guideline")

- Our Style Guide

![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/Style-guide.jpg "Style Guide")

### Mobile View
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/sign-in-mobile.jpg "Sign In Page Mobile View")
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/new-password-mobile.jpg "New Password Mobile View")
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/dashboard-mobile.jpg "Dashboard Mobile View")

### Desktop View
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/sign-in-desktop.jpg "Sign In Desktop View")
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/new-password-desktop.jpg "New Password Desktop View")
![Alt text](https://github.com/Ourspace-YFM/yfm-project/blob/edit-readme/document_photos/dashboard-and-form-desktop.jpg "Dashboard and Form Desktop View")

## Other Documentation
- Project Charter: https://drive.google.com/file/d/0B4jkVluYNFKCcjQ2YW9PTjhqbjA/view?usp=sharing
- Project Proposal: https://docs.google.com/document/d/1qPt0B_ffxZIYb_v-tTZ2lbCVb_Rh8XWlv93VgvC4Q70/edit?usp=sharing
- Project Retrospective: https://drive.google.com/open?id=0B4jkVluYNFKCeE5Lc29TSXBEbkU
- KeyNote Presentation: https://www.icloud.com/keynote/03oc9WvwG2u9OCQz3UKWSyNmQ#YFM_Presentation



## Tools used
- Trello
    - Planning & Research Board: https://trello.com/b/FWmAdMZ8/group-project
    - Kanban Development Board: https://trello.com/b/lStZ3bGY/ourspace-kanban-developer-board
- DB Designer
- Illustrator
