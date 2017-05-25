# React Project! 

We've made it! You're ready to built a React application! Before you start ideating, think about some of the project requirements. Some ideas (games) may not work well for this project. 

### Requirments

1. You must use a Rails API backend with a separate React front-end.
2. Your backend must have at least one resource. 
3. Your application must have full CRUD actions for at least one resource. 
4. You may **NOT** implement authentication or authorization. This means no User model on your API. No log in. No exceptions.


### Setup

Your apps should live in separate repositories. This means you will have two separate repos. 

1. You should generate your API using the following command: `rails new my-project-api --api -T` 
2. To create your React project, you may use a tool called [create-react-app](https://github.com/facebookincubator/create-react-app), an awesome project generator developed by Facebook. To use this
	+ `npm install -g create-react-app` - this installs the generator as a global package
	+ In the directory where you'd like to create your project, `create-react-app my-project-client`. It's that simple! 

**NOTE** by default - both your client app and your rails app will run on port 3000. Check out this [issue](https://github.com/facebookincubator/create-react-app/issues/1083) if you'd like to change the default.