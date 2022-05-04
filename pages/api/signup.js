// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "../../models/User"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == "POST") {
        console.log(req.body)
        
            let p = new User(req.body)
            await p.save()
            res.status(200).json({ success: "success" })
        }
    
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}
export default connectDb(handler);

