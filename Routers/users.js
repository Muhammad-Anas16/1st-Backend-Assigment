import express from 'express';

const router = express.Router();

let users = [
    {
        id: 1,
        name: 'hello',
        email: 'hello@gmail.com'
    }
]

router.get("/", (req, res) => { // Get All Docs
    res.status(200).send({
        error: false,
        data: users,
        message: "Users Fetch Successfully"
    })
})

router.get("/:id", (req, res) => { // Get a Single Doc

    const user = users.find((data) => data.id == req.params.id)

    if (!user) {
        return (
            res.status(404).send({
                error: true,
                data: null,
                message: "User Not Found"
            })
        )
    }

    res.status(200).send({
        error: false,
        data: user,
        message: "Users Found Successfully"
    })
})

router.post("/", (req, res) => { // Add Doc
    const { name, email } = req.body;
    users.push({ id: users.length + 1, name, email })

    res.status(201).send({
        error: false,
        data: users,
        message: "Users Added Successfully"
    })
})

router.put("/editUser/:id", (req, res) => {

    const { id } = req.params
    const data = req.body

    if (!users.find((user) => user.id == id)) {
        return (res.status(404).json({
            error: false,
            message: "No User Found with Such ID",
            data: null
        }))
    }

    const updateUser = users.map((user) => {
        if (user.id == id) return { ...user, ...data }

        return user
    })

    users = updateUser

    res.status(200).json({
        error: false,
        message: "User Updated Successfully",
        data: users
    })

})

router.delete("/:id", (req, res) => {
    const { id } = req.params

    let filter = users.filter((user) => user.id != id)

    if(filter.length < users.length){
        users = filter;
        res.status(200).json({
            error: false,
            message: "Succesfully Deleted",
            data: users
        })
    }

    res.status(404).json({
        error: false,
        message: "No User Deleted with such a ID"
    })
})

export default router