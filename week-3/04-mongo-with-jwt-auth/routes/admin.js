const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWTSecret } = require("../config");
const { Course, Admin } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // Check if an admin with this username already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
        return res.status(409).json({ message: 'Admin with this username already exists' });
    }

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: 'Admin created successfully'
    })
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    // const username = req.body.username;
    // const password = req.body.password;
    const { username, password } = req.body;

    const admin = await Admin.find({
        username,
        password
    })
    
    if(admin) {
        const token = jwt.sign({
            username
        }, JWTSecret);
    
        res.json({
            token
        });
    }
    else {
        res.status(411).json({
            message: "Incorrect Credentials[Admin]"
        });
    }    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    // const title = req.body.title;
    // const description = req.body.description;
    // const imgLink = req.body.imgLink;
    // const price = req.body.price;

    const { title, description, imgLink, price } = req.body;
        const newCourse = await Course.create({
            title, // Since key & value are the same
            description,
            imgLink,
            price
        })
        res.json({
            message: "Course created successfully",  
            courseId: newCourse._id
        })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const data = await Course.find({});
    res.json({
        courses: data
    })
});

module.exports = router;