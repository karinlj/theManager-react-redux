const functions = require("firebase-functions");

//be able to use the admin sdk to interact with
//the authentication service and the firestore service
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

//test function
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello Ninjas!");
});

//call this function when something happens
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => console.log("notification added", doc));
};

//Cloud function for notification when a PROJECT is created
//here: the trigger has to do with firestore
//and a specific document
//when a new project is created inside the projects-collection,
//we fire the callback
exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    //takes a callback func with a doc, and inside we can do something
    //create a new notification
    const project = doc.data(); //title, content etc
    const notification = {
      //properies I want:
      content: "Added a new project",
      //´`=template syntax =  concat them in a string
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    //passing in notification from the callback func
    return createNotification(notification);
  });

//Cloud function for notification when a USER is signed up
//Trigger that is fired when a user has been created using the auth service
//when user signs up, they use the auth service,
//but then we create a document in the firestore collection with more details
exports.userJoined = functions.auth.user().onCreate(user => {
  //the doc is the one with the id of the user that has just been created
  return admin.firestore().collection("users").doc(user.uid).get().then(doc => {
    //access the data on that doc
    const newUser = doc.data();
    const notification = {
      content: "Joined the party",
      user: `${newUser.firstName} ${newUser.lastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    //passing in notification from the callback func
    return createNotification(notification);
  });
});
