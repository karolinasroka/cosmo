# Cosmo

https://www.cosmopila.pl/

React Gatsby frontend with Strapi CMS backend.


## First time setup

	cd backend
	yarn install
	cd ../frontend
	yarn install


Create `backend/.env`:

	PORT=1339


Create `frontend/.env.development`:

	API_URL="http://localhost:1339"


### Strapi

Run:

	cd backend
	yarn develop

Go to the admin URL and:

- Configure an admin user to your liking (prompted on first visit)
- Roles & Permissions > Public: Check `find` and `findone` for all types and save
- Fill out the required data in all of the "Single types"


## Development

First start Strapi CMS backend:

	cd backend
	yarn develop

Then start the Gatsby frontend application:

	cd frontend
	yarn develop
