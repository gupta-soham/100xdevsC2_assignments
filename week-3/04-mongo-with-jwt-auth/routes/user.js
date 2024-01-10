const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const { JWTSecret } = require("../config");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;

    // Check if an admin with this username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(409).json({ message: 'User with this username already exists' });
    }

    await User.create({
        username: username,
        password: password
    })

    res.json({
        message: 'User created successfully'
    })
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    const user = await User.find({
        username,
        password
    })
    
    if(user) {
        const token = jwt.sign({
            username
        }, JWTSecret);
    
        res.json({
            token
        });
    }
    else {
        res.status(411).json({
            message: "Incorrect Credentials[user]"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const data = await Course.find({});
    res.json({
        courses: data
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({ username }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Successfully purchased course"
    })
    
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username // Defined in the user middleware
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    if(courses.length == 0) {
        return res.status(500).json({
            message: "No Purchases were made"
        })
    }

    return res.json({
        courses: courses
    })
    
});

module.exports = router