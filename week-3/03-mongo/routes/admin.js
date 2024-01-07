const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists
    // Admin.create({
    //     username: username,
    //     password: password
    // })
    // .then(() => {
    //     res.json({
    //         message: 'Admin created successfully'
    //     })
    // })
    // .catch((err) => {
    //     res.json({
    //         message: 'Admin not created'
    //     })
    // })

    // Async-await Syntax:
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imgLink = req.body.imgLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title, // Since keay & value are the same
        description,
        price,
        imgLink
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
     
    // Using promises 👇
    // Course.find({});
    //     .then((data) => {
    //         res.json({
    //             courses: data
    //         })
    // })

});

module.exports = router;