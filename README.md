# React Native Event App

## Description


## To get started

Ensure your database is accessible from the `server/routes.ts` files given the env variables
defined in `.env.js`.

Start the express server by running:

```bash
node server/routes/routes.js
```

To start the app, from the root of the project run.

```bash
npm run start
```

Open up the project in Android Studio, build the gradle project and run it on an emulator of your choice.

An emulator phone should pop up, and once the app has build, you will be able to register/login and then use the app.

## To Do List

### Admin

 - ~~Clean repo with .gitignore~~ 
 - ~~Convert to Typsscript~~

### UI
- ~~Add global styling~~
- Get display settings from user preferences
- Dark Mode

### Front End
- Event
  - Create Event
    - Location
    - Spotify integration
    - Add photo, default photo
    - Invites guests
  - Guestlist
  - Spotify Tab
- Event Feed
  - Going/Not going/Maybe
  - Event invitations / New notifications
- User
  - Profile
    - Authorise Spotify
  - Settings
    - Text size
    - ~~Date format~~
    - Privacy (phone number, email, profile)
    
- Authentication / Login
  - Email
  - Phone Number

### Back End
#### Server
  - Populate redux store with datebase values
    - User profile (cache locally?)
    - User settings (cache locally?)
  - Get events for the user
  - Post changes to database
  - Refresh data

#### Database
  - Events
  - Users
  - Privacy / Security / Auth
