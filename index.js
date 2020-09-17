import express from 'express';
import passport from 'passport';
const GoogleStratergy = require('passport-google-oauth20').Stratergy;
const app = express();
 
passport.use(new GoogleStratergy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);