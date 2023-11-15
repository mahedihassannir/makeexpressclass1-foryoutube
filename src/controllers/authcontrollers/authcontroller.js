
const userLogin = (req, res) => {


    res.send("login")



}


const singUp = (req, res) => {

    const body = req.body;

    console.log(body);
    if (!body) {
        return res.status(300).json({ "error": "something wrong" })
    }

    try {

        res.status(200).json(body)

    } catch (error) {

        res.status(402).json({ "error": "invalid access" })


    }
}



module.exports = {

    userLogin,
    singUp,

}