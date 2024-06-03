import Books from "../models/BookModel.js";
import Users from "../models/UserModel.js";

export const getBooks = async(req, res) => {
    try {
        const response = await Books.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }   
}

export const getBookById = async(req, res) => {
    try {
        const response = await Books.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }   
}

export const createBookData = async(req, res) => {
    try {
        await Books.create(req.body);
        res.status(201).json({msg: "Books Created"});
    } catch (error) {
        console.log(error.massage);
    }   
}

export const AddBook = async(req, res) => {
    const { name, judul, pengarang, img_url, stok } = req.body;
    if (!judul || !pengarang || !img_url || !stok) {
        return res.status(400).json({msg: "Lengkapi Data"});
    } else if (!name) {
        return res.status(400).json({msg: "name undefined"});
    }
        try {
            const user = await Users.findAll({
                where: {
                    name: name
                }
            });
            if (!user[0]) return res.sendStatus(403);
            await Books.create({
                user_id: user[0].id,
                judul: judul,
                pengarang: pengarang,
                img_url: img_url,
                stok:stok,
            });
            res.json({msg: "Buku tersimpan!"});
        } catch (error) {
            console.error(error.message); 
                res.status(500).json({ msg: "Buku tidak tersimpan!" });
        }
}


export const updateBookData = async(req, res) => {
    try {
        await Books.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        console.log(req.params.id)
        res.status(200).json({msg: "Books Updated"});
    } catch (error) {
        console.log(error.massage);
    }   
}

export const deleteBookData = async(req, res) => {
    try {
        await Books.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Books Deleted"});
    } catch (error) {
        console.log(error.massage);
    }   
}