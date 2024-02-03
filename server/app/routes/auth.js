const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3050/"
// GET  /auth/google/callback
  // Rest Point for React to call for user object From google APi
  router.get('/login/success', (req,res)=>{
    console.log(`\x1b[33m DEBUG : ---> ${req} \x1b[0j`)
    if (req.user) {
        res.json({
         message : "User Authenticated",
        user : req.user
       })
    }
    else res.status(400).json({
      message : "User Not Authenticated",
     user : null
   })
 });
router.get("/login/failed", (req,res) => {
    res.status(401).json({
        success:false,
        message: "failure",
    });
});
// router.get("/logout", (req, res) => {
//     req.logout();
//     res.redirect(CLIENT_URL);
// });

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
  if (err) { return next(err); }
  res.redirect('/');
});
});

router.get("/google", passport.authenticate("google", { scope: ['profile', 'email']}));
router.get(
    "/google/callback", 
    passport.authenticate("google",{
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  }),(req, res) => {
    // Successful authentication, redirect or handle the user as desired
    res.redirect('/');
  }
);

// app.get("/auth/google/callback", 
//   passport.authenticate("google", { failureRedirect: "/login" }),
//   function(req, res) {
//     // Successful authentication, redirect to secret page.
//     res.redirect("http://localhost:3000/secret-page");  //redirect back to the frontend secret page
//   });
module.exports = router