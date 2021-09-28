
router.post('/', async (req, res) => {
    const { title, contents } = req.body
    if (!title || !contents) {
        res.status(400).json({
            message: "Please provide title and contents for the post"
        })
    } else {
        Posts.insert({ title, contents })
            .then(({ id }) => {
                return Posts.findById(id)
            })
            .then(post => {
                res.status(201).json(post)
            })
            .catch(err => {
                res.status(500).json({
                    message: "There was an error while saving the post to the database"
                })
            })
    }
})
